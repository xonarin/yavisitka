import { block } from 'bem-cn'; 
import { ReactElement, ReactNode } from "react";
import "./admin-scrollbar-container.scss";

type TScrollbarContainer = {
  negativHeightAdjustment: number;
  children: ReactNode;
};

const cnStyles = block("Scrollbar-container");
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
