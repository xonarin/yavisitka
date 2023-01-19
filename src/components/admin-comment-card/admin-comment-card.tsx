import React from "react";
import styles from "./admin-comment-card.module.scss";
import { cn } from "../../utils/bem-css-module";
import { Link } from "react-router-dom";
import { EMPTY_TARGET, TARGETSMAP } from "../../utils/setup-constants";
const cnStyles = cn(styles, "Card");

export const CommentCard = ({ data }) => {
  // console.log(_id, from, target, text, to)

  return (
    <ul className={cnStyles()}>
      <li className={cnStyles("content")}>Когорта</li>
      <li className={cnStyles("content")}>{data.date || "--/--/--"}</li>
      <li className={cnStyles("content")}>
        <Link to={`/detail/${data.from._id}`}>{data.from.name}</Link>
      </li>
      <li className={cnStyles("content")}>
        <Link to={`/detail/${data.to._id}`}>{data.to.name}</Link>
      </li>
      <li className={cnStyles("content")}>{TARGETSMAP[data.target] || EMPTY_TARGET }</li>
      <li className={cnStyles("content")}>{data.text} </li>
    </ul>
  );
};
