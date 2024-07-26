import { useEffect, useState } from "react";
import "./global.css";
import s from "./style.module.css";
import { TVShowAPI } from "./api/tv-shows";
import { BACKDROP_BASE_URL } from "./config";
import { TVShowDetail } from "./components/TVShowDetail/TVShowdetail";
import { Logo } from "./components/Logo/Logo";
import { TVShowList } from "./components/TVShowList/TVShowList";
import { SearchBar } from "./components/SearchBar/SearchBar";

function App() {
  const [curTVShow, setCurTVShow] = useState<any>();
  const [recommendationList, setRecommendationList] = useState<any[]>([]);

  async function fetchPopular() {
    try {
      const list = await TVShowAPI.fetchPopulars();
      if (list.length > 0) {
        setCurTVShow(list[0]);
      }
    } catch (error) {
      alert("Something wrong when fetching populars");
    }
  }

  async function fetchRecommendations(tvShowId: string) {
    const list = await TVShowAPI.fetchRecommendations(tvShowId);
    setRecommendationList(list.slice(0, 10));
  }

  async function fetchByTitle(title: string) {
    const resp = await TVShowAPI.fetchByTitle(title);
    if (resp.length > 0) {
      setCurTVShow(resp[0]);
    }
  }

  useEffect(() => {
    fetchPopular();
  }, []);

  useEffect(() => {
    if (curTVShow) fetchRecommendations(curTVShow.id);
  }, [curTVShow]);

  function updateCurrentTVShow(tvShow: any) {
    setCurTVShow(tvShow);
  }

  return (
    <div
      className={s.main_container}
      style={{
        background: curTVShow
          ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${curTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className={s.header}>
        {/* search bar */}
        <div className="row">
          <div className="col-4">
            <Logo />{" "}
          </div>
          <div className="col-md-12 col-lg-4">
            <SearchBar onSubmit={fetchByTitle} />
          </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>
        {curTVShow && <TVShowDetail tvShow={curTVShow} />}
      </div>
      <div className={s.recommended_tv_shows}>
        {recommendationList && (
          <TVShowList
            list={recommendationList}
            onClickItem={updateCurrentTVShow}
          />
        )}
      </div>
    </div>
  );
}

export default App;
