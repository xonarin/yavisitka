import React from "react";
import { cn } from "../../..//utils/bem-css-module";
import styles from "./InputTextarea.module.scss";

const cnStyles = cn(styles, "InputTextarea");

export const InputTextarea = (text1: any) => {
  return (
    <textarea
      placeholder={text1}
      className={cnStyles("textarea")}
      maxLength={300}
    ></textarea>
  );
};
