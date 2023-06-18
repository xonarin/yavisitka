import { block } from "bem-cn";
import "./LinkEntry.scss";

const cnStyles = block("Link");

const LinkEntry = () => {
  return (
    <a
      href={
        "https://oauth.yandex.ru/authorize?response_type=code&client_id=eaead7d5cf4b41308d1d50dbc6d2de7c"
      }
      className={cnStyles()}
    >
      Войти с Яндекс ID
    </a>
  );
};

export default LinkEntry;
