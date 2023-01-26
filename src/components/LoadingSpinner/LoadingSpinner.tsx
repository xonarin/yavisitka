import React from "react";
import { block } from 'bem-cn'; 
import "./LoadingSpinner.scss";

const cnStyles = block("LoadingSpinner");

export default function LoadingSpinner() {
  return (
    <div className={cnStyles()}>
      <div className={cnStyles("spinner")}></div>
    </div>
  );
}
