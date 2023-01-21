import React, { useState } from "react";
import styles from "./admin-comment-card.module.scss";
import { cn } from "../../utils/bem-css-module";
import { Link } from "react-router-dom";
const cnStyles = cn(styles, "Card");

export const CommentCard = ({ data }) => {
  const [isDeleted, setIsDeletet] = useState(false);

  function handleDelete() {
    console.log(`Удали комментарий id: ${data._id}`);
    setIsDeletet(true);
  }

  return (
    <ul className={cnStyles()}>
      <li
        className={`${cnStyles("content")} ${
          isDeleted ? cnStyles("content-deleted") : ""
        }`}
      >
        <Link to={`/cohort/${data.cohort}`}>{data.cohort}</Link>
      </li>
      <li
        className={`${cnStyles("content")} ${
          isDeleted ? cnStyles("content-deleted") : ""
        }`}
      >
        {data.date || "--/--/--"}
      </li>
      <li
        className={`${cnStyles("content")} ${
          isDeleted ? cnStyles("content-deleted") : ""
        }`}
      >
        <Link to={`/detail/${data.from._id}`}>{data.from.name}</Link>
      </li>
      <li
        className={`${cnStyles("content")} ${
          isDeleted ? cnStyles("content-deleted") : ""
        }`}
      >
        <Link to={`/detail/${data.to._id}`}>{data.to.name}</Link>
      </li>
      <li
        className={`${cnStyles("content")} ${
          isDeleted ? cnStyles("content-deleted") : ""
        }`}
      >
        {data.target}
      </li>
      <li
        className={`${cnStyles("content")} ${
          isDeleted ? cnStyles("content-deleted") : ""
        }`}
      >
        {data.text}{" "}
      </li>
      <li>
        <div className={cnStyles("button-container")}>
          <button
            className={cnStyles("delete-button")}
            onClick={handleDelete}
            type="button"
            aria-label="Удалить комментарий"
          ></button>
        </div>
      </li>
    </ul>
  );
};
