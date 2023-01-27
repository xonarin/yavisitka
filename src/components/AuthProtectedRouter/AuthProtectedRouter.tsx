import Container from "../../components/Container/Container";
import LinkEntry from "../../components/LinkEntry/LinkEntry";
import { block } from "bem-cn";
import "./AuthProtectedRouter.scss";

const cnStyles = block("Auth");

const AuthRouter = () => {
  return (
    <div className={cnStyles()}>
      <Container>
        <div className={cnStyles("container")}>
          <h1 className={cnStyles("title")}>C кем я учусь?</h1>
          <LinkEntry />
        </div>
      </Container>
    </div>
  );
};

export default AuthRouter;
