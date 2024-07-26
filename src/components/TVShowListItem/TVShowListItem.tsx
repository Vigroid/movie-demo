import { SMALL_ITEM_BASE_URL } from "../../config";
import s from "./style.module.css";

export function TVShowListItem(props: any) {
  const { tvShow, onClick } = props;
  return (
    <div className={s.container} onClick={() => onClick(tvShow)}>
      <img
        alt={tvShow.name}
        src={`${SMALL_ITEM_BASE_URL}${tvShow.backdrop_path}`}
        className={s.img}
      />
      <div className={s.title}>
        {tvShow.name.length > 20
          ? tvShow.name.slice(0, 20) + "..."
          : tvShow.name}
      </div>
    </div>
  );
}
