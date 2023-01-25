import { block } from 'bem-cn'; 
import Container from "../../components/Container/Container";
import "./Footer.scss";

const cnStyles = block("Footer");

const Footer = () => {
  return (
    <>
      <footer className={cnStyles()}>
        <Container>
          <div className={cnStyles("container")}>
            <p className={cnStyles("copyright")}>© Визитки</p>
            <p className={cnStyles("copyright")}>Яндекс Практикум</p>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
