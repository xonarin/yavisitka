import { block } from 'bem-cn'; 
import { ReactElement } from "react";
import "./admin-scrollbar-container.scss";

type TScrollbarContainer = {
  negativHeightAdjustment: number;
  children: ReactElement;
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
