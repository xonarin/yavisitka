import React, { useEffect, useMemo, useState } from "react";
import styles from "./admin-comments-block.module.scss";
import { cn } from "../../utils/bem-css-module";
import { AdminSearchInput } from "../../components/admin-search-input/admin-search-input";
import { AdminCommentsList } from "../../components/admin-comments-list/admin-comments-list";
import { commentsGet, usersGet } from "../../utils/api-test-data";
import { EMPTY_TARGET, TARGETSMAP } from "../../utils/setup-constants";

const cnStyles = cn(styles, "CommentsBlock");

export const AdminCommentsBlock = () => {
  const [searchStr, setSearchStr] = useState("");
  const comments = commentsGet.items;
  const users = usersGet.items;

  const commentsUpd = useMemo(() => {
    return comments.map((comment) => {
      return {
        ...comment,
        cohort:
          users.filter((user) => user._id === comment.from._id)[0]?.cohort ||
          "Когорта",

        target: TARGETSMAP[comment.target] || EMPTY_TARGET,
      };
    });
  }, [comments, users]);

  function filterComments(comment) {
    return [
      comment.cohort,
      comment.from.name,
      comment.to.name,
      comment.target,
      comment.text,
    ].some((val) => val.toLowerCase().includes(searchStr.toLowerCase()));
  }

  return (
    <div className={cnStyles()}>
      <AdminSearchInput setSearchStr={setSearchStr} />
      <AdminCommentsList list={commentsUpd.filter(filterComments)} />
    </div>
  );
};
