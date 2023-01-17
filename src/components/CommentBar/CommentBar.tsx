import React from "react";
import styles from "./CommentBar.module.scss";
import { cn } from "../../utils/bem-css-module";
import exp from "constants";

const cnStyles = cn(styles, "CommentBar");


const CommentBar = () => {
  return (
    <div className={cnStyles()}>
      <div></div>
      <div></div>
    </div>
  );
};

export default CommentBar;