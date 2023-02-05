import { block } from "bem-cn";
import { ScrollbarContainer } from "../AdminScrollbarContainer/AdminScrollbarContainer";
import { UserCard } from "../AdminUserCard/AdminUserCard";
import { TUser } from "../../utils/types";
import "./AdminUsersList.scss";

const cnStyles = block("UsersList");

type TAdminUsersList = {
  list: TUser[];
};

export const AdminUsersList = ({ list }: TAdminUsersList) => {
  return (
    <div className={cnStyles("mobile-container")}>
      <ul className={cnStyles("table-header")}>
        <li className={cnStyles("column-title")}>Номер когорты</li>
        <li className={cnStyles("column-title")}>E-mail</li>
        <li className={cnStyles("column-title")}>Имя и фамилия студента</li>
      </ul>

      <ScrollbarContainer negativHeightAdjustment={326}>
        {list.map((userData) => (
          <UserCard key={userData._id} data={userData} />
        ))}
      </ScrollbarContainer>
    </div>
  );
};
