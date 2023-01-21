import React, { Children } from "react";
import styles from "./admin-scrollbar-container.module.scss";
import { cn } from "../../utils/bem-css-module";

const cnStyles = cn(styles, "Scrollbar-container");

export const ScrollbarContainer = ({ negativHeightAdjustment, children }) => {
    let calcStyle = {
        height: `calc(100vh - ${negativHeightAdjustment}px)`,
      };
  return <div style = {calcStyle} className={cnStyles()}>{children}</div>;
};
