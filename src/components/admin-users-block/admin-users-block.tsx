import React from "react";
import styles from "./admin-users-block.module.scss";
import { cn } from "../../utils/bem-css-module";
import { AdminSearchInput } from "../../components/admin-search-input/admin-search-input";
import { AdminUsersList } from "../../components/admin-users-list/admin-users-list";
import { AdminAddingUsers } from "../../components/admin-adding-users/admin-adding-users";

const cnStyles = cn(styles, "UsersBlock");

export const AdminUsersBlock = () => {
  return (
    <div className={cnStyles()}>
      <div>
      <AdminSearchInput />
      <AdminUsersList />

      </div>
      
      <AdminAddingUsers />
    </div>
  );
};
