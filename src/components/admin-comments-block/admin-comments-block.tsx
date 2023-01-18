import React from "react";
import styles from "./admin-comments-block.module.scss";
import { cn } from "../../utils/bem-css-module";
import { AdminSearchInput } from "../../components/admin-search-input/admin-search-input";
import { AdminCommentsList } from "../../components/admin-comments-list/admin-comments-list";
import { commentsGet } from "../../utils/api-test-data";

const cnStyles = cn(styles, "CommentsBlock");

export const AdminCommentsBlock = () => {
  const { total, items } = commentsGet;

  return (
    <div className={cnStyles()}>
      <AdminSearchInput />
      <AdminCommentsList list={items} />
    </div>
  );
};
