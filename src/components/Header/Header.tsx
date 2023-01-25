import Container from "../../components/Container/Container";
import Logo from "../../components/Logo/Logo";
import MiniProfile from "../../components/MiniProfile/MiniProfile";
import { getCookie, setCookie, deleteCookie } from "../../utils/cookie";
import { block } from 'bem-cn';
import "./Header.scss";

const cnStyles = block("Header");

const Header = () => {
  const status = getCookie("status") ? "admin" : "user";
  const auth = getCookie("token");

  const handleClickAdmin = () => {
    setCookie("status", "admin", { secure: true, "max-age": 360000 });
    window.location.reload();
  };

  const handleClickUser = () => {
    setCookie("status", "admin", { secure: true, "max-age": -1 });
    window.location.reload();
  };

  return (
    <header className={cnStyles()}>
      <Container>
        <div className={cnStyles("container")}>
          <Logo />
          Ваш статус: ({status}):
          <button type="button" onClick={handleClickUser}>
            Студент
          </button>
          <button type="button" onClick={handleClickAdmin}>
            Админ
          </button>
          {auth && <MiniProfile />}
        </div>
      </Container>
    </header>
  );
};

export default Header;
