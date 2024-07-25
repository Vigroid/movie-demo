import { useEffect, useState } from "react";
import "./global.css";
import s from "./style.module.css";
import { TVShowAPI } from "./api/tv-shows";
import { BACKDROP_BASE_URL } from "./config";
import { TVShowDetail } from "./components/TVShowDetail/TVShowdetail";

function App() {
  const [curTVShow, setCurTVShow] = useState<any>();
  useEffect(() => {
    (async () => {
      const list = await TVShowAPI.fetchPopulars();
      if (list.length > 0) {
        setCurTVShow(list[0]);
      }
    })();
  }, []);

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
            <div>Logo</div>
            <div>Subtitle</div>
          </div>
          <div className="col-md-12 col-lg-4">
            <input style={{ width: "100%" }} type="text" />
          </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>
        {curTVShow && <TVShowDetail tvShow={curTVShow} />}
      </div>
      <div className={s.recommended_tv_shows}>Recommended</div>
    </div>
  );
}

export default App;
