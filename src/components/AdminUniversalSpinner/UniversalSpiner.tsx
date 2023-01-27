import { FC } from "react";
import { block } from 'bem-cn'; 
import "./UniversalSpiner.scss";

const cnStyles = block("LoadingSpinner");

export const UniversalSpinner: FC<{ size: number; minH: number }> = ({
  size,
  minH,
}) => {
  const add1 = {
    minHeight: `${minH}px`,
  };

  const add2 = {
    width: `${size}px`,
    height: `${size}px`,
  };

  return (
    <div style={add1} className={cnStyles()}>
      <div style={add2} className={cnStyles("spinner")}></div>
    </div>
  );
};
