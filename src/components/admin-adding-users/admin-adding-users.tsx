import React from "react";
import styles from "./admin-adding-users.module.scss";
import { cn } from "../../utils/bem-css-module";
const cnStyles = cn(styles, "AddingUsers");

export const AdminAddingUsers = () => {
  return (
    <div className={cnStyles()}>
      <p>Компонент AdminAddingUsers</p>
      
    </div>
  );
};