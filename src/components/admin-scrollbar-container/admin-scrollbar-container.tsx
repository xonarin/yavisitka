import styles from "./admin-scrollbar-container.module.scss";
import { cn } from "../../utils/bem-css-module";

const cnStyles = cn(styles, "Scrollbar-container");
//@ts-ignore
export const ScrollbarContainer = ({ negativHeightAdjustment, children }) => {
    let calcStyle = {
        maxHeight: `calc(100vh - ${negativHeightAdjustment}px)`,
      };
  return <div style = {calcStyle} className={cnStyles()}>{children}</div>;
};
