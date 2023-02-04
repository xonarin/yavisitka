import { useState } from "react";
import { block } from "bem-cn";
import { Link } from "react-router-dom";
import { TComment } from "../../utils/types";
import "./AdminCommentCard.scss";
import AdminDeleteDtn from "../AdminDeleteBtn/AdminDeleteDtn";

const cnStyles = block("CardComment");

export const CommentCard = ({ data }: { data: TComment }) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
        <AdminDeleteDtn 
          data={data} 
          isDeleted={isDeleted} 
          isLoading={isLoading} 
          setIsDeleted={setIsDeleted} 
          setIsLoading={setIsLoading} 
        />
      </li>
    </ul>
  );
};
