import logoImg from "../../assets/logo.png";
import s from "./style.module.css";

export function Logo() {
  return (
    <div>
      <div className={s.container}>
        <img className={s.logo} src={logoImg} alt="logo" />
        <div className={s.title}>WatchIt</div>
      </div>
      <div className={s.subtitle}>Movie demo project</div>
    </div>
  );
}
