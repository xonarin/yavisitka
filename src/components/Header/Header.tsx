import Container from "../../components/Container/Container";
import Logo from "../../components/Logo/Logo";
import MiniProfile from "../../components/MiniProfile/MiniProfile";
import {
  getCookie,
  setCookie,
  deleteCookie,
  clearCookies,
  clearLocalStorage,
} from "../../utils/cookie";
import { block } from "bem-cn";
import "./Header.scss";
import { useEffect } from "react";

const cnStyles = block("Header");

const Header = () => {
  const status = getCookie("status") ? "admin" : "user";
  const auth = getCookie("token");
  // const userCookie = getCookie("realUser");
  // const realUser = userCookie ? JSON.parse(userCookie) : "";

  // useEffect(() => {
  //   console.log(realUser);
  // });

  const handleClickAdmin = () => {
    setCookie("status", "admin", { secure: true, "max-age": 360000 });
    window.location.reload();
  };

  const handleClickUser = () => {
    setCookie("status", "admin", { secure: true, "max-age": -1 });
    window.location.reload();
  };

  const handleClickExit = () => {
    clearCookies();
    clearLocalStorage();
    sessionStorage.clear();
    // localStorage.removeItem("refreshToken");
    window.location.reload();
  };

  return (
    <header className={cnStyles()}>
      <Container>
        <div className={cnStyles("container")}>
          <Logo />
          Ваш статус: {status}
          <button type="button" className={cnStyles("button")} onClick={handleClickUser}>
            Студент
          </button>
          <button type="button" className={cnStyles("button")} onClick={handleClickAdmin}>
            Админ
          </button>
          <button type="button" className={cnStyles("button")} onClick={handleClickExit}>
            Выйти
          </button>
          {auth && <MiniProfile />}
        </div>
      </Container>
    </header>
  );
};

export default Header;
