import React from "react";
import styles from "./ChatButton.module.scss";
import { cn } from "../../utils/bem-css-module";

const cnStyles = cn(styles, "ChatButton");
const btnImage = require("../../images/сhat-btn.svg");

const ChatButton = () => {
  return (
    <div className={cnStyles()}>
      <button type="button" name="chatButton" className={cnStyles("button")}>
        <img className={cnStyles('buttonImg')} src={btnImage} alt="Значок кнопки чата"/>
      </button>
      <p className={cnStyles('commentCounter')}>2</p>
    </div>
  );
};

export default ChatButton
