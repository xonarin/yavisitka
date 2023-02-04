import Container from "../../components/Container/Container";
import Logo from "../../components/Logo/Logo";
import MiniProfile from "../../components/MiniProfile/MiniProfile";
import { getCookie } from "../../utils/cookie";
import { block } from "bem-cn";
import "./Header.scss";

const cnStyles = block("Header");

const Header = () => {
  const auth = getCookie("token");

  return (
    <header className={cnStyles()}>
      <Container>
        <div className={cnStyles("container")}>
          <Logo />
         
          {auth && <MiniProfile />}
        </div>
      </Container>
    </header>
  );
};

export default Header;
