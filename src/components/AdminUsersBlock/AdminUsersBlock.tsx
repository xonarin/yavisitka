import { useState, useEffect } from "react";
import { block } from "bem-cn";
import { AdminSearchInput } from "../AdminSearchInput/AdminSearchInput";
import { AdminUsersList } from "../AdminUsersList/AdminUsersList";
import { AdminAddingUsers } from "../AdminAddingUsers/AdminAddingUsers";
import { getUsers } from "../../utils/api";
import { TUser, TUsersDataSet } from "../../utils/types";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import "./AdminUsersBlock.scss";

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
        }
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  function filterUsers(user: TUser) {
    return [user.cohort, user.name, user.email].some((val) =>
      val.toLowerCase().includes(searchStr.toLowerCase())
    );
  }

  return (
    <div className={cnStyles()}>
      <div className={cnStyles("mobile-container")}>
        <AdminSearchInput setSearchStr={setSearchStr} inputValue={searchStr} />
        {isLoading && <LoadingSpinner />}
        {!isLoading && <AdminUsersList list={users.filter(filterUsers)} />}
      </div>

      <AdminAddingUsers setUsers={setUsers} currentUsers={users} />
    </div>
  );
};
