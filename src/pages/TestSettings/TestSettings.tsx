import React from "react";
import {
  clearCookies,
  clearLocalStorage,
  getCookie,
  setCookie,
} from "../../utils/cookie";
import { block } from "bem-cn";
import "./TestSettings.scss";
import Container from "../../components/Container/Container";
import { SettingUsersBlock } from "../../components/SettingsUsersBlock/SettingsUsersBlock";
import { Link } from "react-router-dom";

const cnStyles = block("TestSettings");

export function TestSettings() {
  const status = getCookie("status") ? "Куратор" : "Студент";

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
    window.location.reload();
  };
  return (
    <Container>
      <p className={cnStyles("title")}>Настройки для тестирования</p>
      <div className={cnStyles()}>
        <SettingUsersBlock />

        <div className={cnStyles("status-block")}>
          <p>
            Выбрана роль:
            <span className={cnStyles("info-span")}>{`${status}`}</span>
          </p>
          <button type="button" onClick={handleClickUser}>
            Студент
          </button>
          <button type="button" onClick={handleClickAdmin}>
            Куратор
          </button>
        </div>
      </div>

      <button
        className={cnStyles("clear-button")}
        type="button"
        onClick={handleClickExit}
      >
        Выйти из профиля (очистить куки и локал сторадж)
      </button>

      <Link className={cnStyles("link")} to="/">
        На главную
      </Link>
    </Container>
  );
}
