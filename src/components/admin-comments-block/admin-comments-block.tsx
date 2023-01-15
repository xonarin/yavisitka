import React from "react";
import styles from "./admin-comments-block.module.scss";
import { cn } from "../../utils/bem-css-module";
import { AdminSearchInput } from "../../components/admin-search-input/admin-search-input";
import { AdminCommentsList } from "../../components/admin-comments-list/admin-comments-list";

const cnStyles = cn(styles, "CommentsBlock");

export const AdminCommentsBlock = () => {
  return (
    <div className={cnStyles()}>
    <AdminSearchInput />
    <AdminCommentsList />
    </div>
  );
};
