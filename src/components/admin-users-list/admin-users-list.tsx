import React from "react";
import styles from "./admin-users-list.module.scss";
import { cn } from "../../utils/bem-css-module";
import { ScrollbarContainer } from "../../components/admin-scrollbar-container/admin-scrollbar-container";
import { UserCard } from "../admin-user-card/admin-user-card";

const cnStyles = cn(styles, "UsersList");
//@ts-ignore
export const AdminUsersList = ({ list, header = true }) => {
  return (
    <>
      {header && (
        <div className={cnStyles()}>
          <ul className={cnStyles("table-header")}>
            <li className={cnStyles("column-title")}>Номер когорты</li>
            <li className={cnStyles("column-title")}>E-mail</li>
            <li className={cnStyles("column-title")}>Имя и фамилия студента</li>
          </ul>
        </div>
      )}

      <ScrollbarContainer negativHeightAdjustment={326}>
        {list.map((userData: any) => (
          <UserCard key={userData._id} data={userData} />
        ))}
      </ScrollbarContainer>
    </>
  );
};
