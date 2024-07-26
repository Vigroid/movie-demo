import { TVShowListItem } from "../TVShowListItem/TVShowListItem";
import s from "./style.module.css";

export function TVShowList(props: any) {
  const { list, onClickItem } = props;
  return (
    <div className={s.container}>
      <div className={s.title}>You'll probably like</div>
      <div className={s.list}>
        {list.map((show: any) => {
          return (
            <span key={show.id} className={s.tv_show_item}>
              <TVShowListItem
                tvShow={show}
                onClick={(item: any) => onClickItem(item)}
              />
            </span>
          );
        })}
      </div>
    </div>
  );
}
