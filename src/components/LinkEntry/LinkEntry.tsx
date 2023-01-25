import { block } from 'bem-cn';
import "./LinkEntry.scss";

const cnStyles = block("Link");

const LinkEntry = () => {
  return (
    <a
      href={
        "https://oauth.yandex.ru/authorize?response_type=code&client_id=5943887238384dbab2c210bf0dddd07d"
      }
      className={cnStyles()}
    >
      Войти с Яндекс ID
    </a>
  );
};

export default LinkEntry;
