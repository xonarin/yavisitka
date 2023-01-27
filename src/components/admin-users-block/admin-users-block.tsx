import { useState, useEffect } from "react";
import { block } from 'bem-cn'; 
import { AdminSearchInput } from "../../components/admin-search-input/admin-search-input";
import { AdminUsersList } from "../../components/admin-users-list/admin-users-list";
import { AdminAddingUsers } from "../../components/admin-adding-users/admin-adding-users";
import { getUsers } from "../../utils/api";
import { TUser, TUsersDataSet } from "../../utils/types";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import "./admin-users-block.scss";

const cnStyles = block("UsersBlock");

export const AdminUsersBlock = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchStr, setSearchStr] = useState("");
  const [{ usersTotal, users }, setUsers] = useState<TUsersDataSet>({
    usersTotal: 0,
    users: [],
  });

  useEffect(() => {
    setIsLoading(true);
    getUsers()
      .then((res) => {
        if (res) {
          setUsers({ usersTotal: res.total, users: res.items });
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  function filterUsers(user: TUser) {
    return [user.cohort, user.name, user.email].some((val) =>
      val.toLowerCase().includes(searchStr.toLowerCase())
    );
  }

  return (
    <div className={cnStyles()}>
      <div className={cnStyles('container-search')}>
        <AdminSearchInput setSearchStr={setSearchStr} />
        {isLoading && <LoadingSpinner />}
        {!isLoading && <AdminUsersList list={users.filter(filterUsers)} />}
      </div>

      <AdminAddingUsers setUsers={setUsers} currentUsers={users} />
    </div>
  );
};
