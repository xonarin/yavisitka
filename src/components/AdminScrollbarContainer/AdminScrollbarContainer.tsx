import { ReactNode } from "react";

type TScrollbarContainer = {
  negativHeightAdjustment: number;
  children: ReactNode;
};

export const ScrollbarContainer = ({
  negativHeightAdjustment,
  children,
}: TScrollbarContainer) => {
  let calcStyle = {
    maxHeight: `calc(100vh - ${negativHeightAdjustment}px)`,
  };
  return <div style={calcStyle}>{children}</div>;
};
