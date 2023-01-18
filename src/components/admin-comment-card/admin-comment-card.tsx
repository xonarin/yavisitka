import React from "react";
import styles from "./admin-comment-card.module.scss";
import { cn } from "../../utils/bem-css-module";
const cnStyles = cn(styles, "Card");

export const CommentCard = ({ data }) => {
  // console.log(_id, from, target, text, to)
  return (
    <ul className={cnStyles()}>
      <li className={cnStyles("content")}>Когорта</li>
      <li className={cnStyles("content")}>Дата</li>
      <li className={cnStyles("content")}>{data.from.name}</li>
      <li className={cnStyles("content")}>{data.to.name}</li>
      <li className={cnStyles("content")}>{data.target}</li>
      <li className={cnStyles("content")}>{data.text} </li>
    </ul>
  );
};
