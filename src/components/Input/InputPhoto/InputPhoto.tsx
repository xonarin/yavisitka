import React from "react";
import { block } from "bem-cn";
import { handleFileUpload } from "../../../utils/validate-photo";
import "./InputPhoto.scss";

const cnStyles = block("InputPhoto");

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
