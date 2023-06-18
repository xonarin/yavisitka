import { useState } from "react";
import { block } from "bem-cn";
import { Link } from "react-router-dom";
import { TComment } from "../../utils/types";
import "./AdminCommentCard.scss";
import AdminDeleteBtn from "../AdminDeleteBtn/AdminDeleteBtn";
import { deleteComment } from "../../utils/api";

const cnStyles = block("CardComment");

export const CommentCard = ({ data }: { data: TComment }) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleDelete() {
    if (!isDeleted) {
      setIsLoading(true);
      deleteComment(data._id)
        .then(() => {
          setIsDeleted(true);
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          setIsLoading(false);
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
      <li className={cnStyles("content")}>
        <AdminDeleteBtn
          handleDelete={handleDelete}
          isDeleted={isDeleted}
          isLoading={isLoading}
        />
      </li>
    </ul>
  );
};
