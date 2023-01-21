import React, { useState } from "react";
import styles from "./admin-users-block.module.scss";
import { cn } from "../../utils/bem-css-module";
import { AdminSearchInput } from "../../components/admin-search-input/admin-search-input";
import { AdminUsersList } from "../../components/admin-users-list/admin-users-list";
import { AdminAddingUsers } from "../../components/admin-adding-users/admin-adding-users";
import { commentsGet, usersGet } from "../../utils/api-test-data";

const cnStyles = cn(styles, "UsersBlock");

export const AdminUsersBlock = () => {
  const [searchStr, setSearchStr] = useState("");
  const users = usersGet.items;

  function filterUsers(user) {
    return [user.cohort, user.name, user.email].some((val) =>
      val.toLowerCase().includes(searchStr.toLowerCase())
    );
  }

  return (
    <div className={cnStyles()}>
      <div>
        <AdminSearchInput setSearchStr={setSearchStr} />
        <AdminUsersList list={users.filter(filterUsers)}/>
      </div>

      <AdminAddingUsers />
    </div>
  );
};
