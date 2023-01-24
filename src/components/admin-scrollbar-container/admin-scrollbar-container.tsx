import styles from "./admin-scrollbar-container.module.scss";
import { cn } from "../../utils/bem-css-module";
import { ReactComponentElement, ReactElement } from "react";
import { type } from "@testing-library/user-event/dist/type";

type TScrollbarContainer = {
  negativHeightAdjustment: number;
  children: ReactElement;
};

const cnStyles = cn(styles, "Scrollbar-container");
export const ScrollbarContainer = ({
  negativHeightAdjustment,
  children,
}: TScrollbarContainer) => {
  let calcStyle = {
    maxHeight: `calc(100vh - ${negativHeightAdjustment}px)`,
  };
  return (
    <div style={calcStyle} className={cnStyles()}>
      {children}
    </div>
  );
};
