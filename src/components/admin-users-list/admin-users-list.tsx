import React from "react";
import styles from "./admin-users-list.module.scss";
import { cn } from "../../utils/bem-css-module";
import { ScrollbarContainer } from "../../components/admin-scrollbar-container/admin-scrollbar-container";

const cnStyles = cn(styles, "UsersList");
// console.log(cnStyles);

export const AdminUsersList = ({list}) => {
  return (
    <>
      <div className={cnStyles()}>
        <ul className={cnStyles("table-header")}>
          <li className={cnStyles("column-title")}>Номер когорты</li>
          <li className={cnStyles("column-title")}>E-mail</li>
          <li className={cnStyles("column-title")}>Имя и фамилия студента</li>
        </ul>
      </div>
      <ScrollbarContainer negativHeightAdjustment={326}>
        <p>Тут будут карточки</p>
      </ScrollbarContainer>
    </>
  );
};
