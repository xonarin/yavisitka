import React, { useState } from "react";
import styles from "./admin-comment-card.module.scss";
import { cn } from "../../utils/bem-css-module";
import { Link } from "react-router-dom";
import { deleteComment } from "../../utils/api";
import { UniversalSpinner } from "../admin-universal-spinner/universal-spiner";

const cnStyles = cn(styles, "Card");
export const CommentCard = ({ data }:any) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleDelete() {
    if (!isDeleted) {
      setIsLoading(true);
      deleteComment(data._id)
        .then((res) => {
          console.log(`Удал комментарий id: ${data._id}`);
          setIsDeleted(true);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error(err);
        });
    }
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
          {isLoading && <UniversalSpinner size={15} minH={24} />}
          {!isDeleted && !isLoading && (
            <button
              className={cnStyles("delete-button")}
              onClick={handleDelete}
              type="button"
              aria-label="Удалить комментарий"
            ></button>
          )}
        </div>
      </li>
    </ul>
  );
};
