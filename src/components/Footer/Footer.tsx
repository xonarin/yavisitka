import { block } from "bem-cn";
import Container from "../../components/Container/Container";
import { getCookie } from "../../utils/cookie";
import { SettingsLink } from "../SettingsLink/SettingsLink";
import "./Footer.scss";

const cnStyles = block("Footer");

const Footer = () => {
  const auth = getCookie("token");
  return (
    <footer className={cnStyles()}>
      <Container>
        <div className={cnStyles("container")}>
          <p className={cnStyles("copyright")}>© Визитки</p>
          {auth && <SettingsLink />}
          <p className={cnStyles("copyright")}>Яндекс Практикум</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
