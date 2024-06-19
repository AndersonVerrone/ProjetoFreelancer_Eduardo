import style from "./styles.module.scss";
import logo from "../../assets/img/logo.png"

export const Header = () => {
  return (
    <header className={style.header}>
      <div>
        <img src={logo} alt="logo da empresa" />
      </div>
    </header>
  );
};
