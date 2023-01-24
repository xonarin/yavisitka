import React from "react";
import { cn } from "../../..//utils/bem-css-module";
import styles from "./InputPhoto.module.scss";
import { handleFileUpload } from "../../../utils/validate-photo";

const cnStyles = cn(styles, "InputPhoto");

export const InputPhoto = () => {
  return (
    <input
      type="file"
      className={cnStyles("photo-text")}
      name="hobbies"
      id="hobbies"
      accept=".jpg, .png"
      onChange={handleFileUpload}
    />
  );
};
