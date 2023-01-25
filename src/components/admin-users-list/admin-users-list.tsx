import { block } from 'bem-cn'; 
import { ScrollbarContainer } from "../../components/admin-scrollbar-container/admin-scrollbar-container";
import { UserCard } from "../admin-user-card/admin-user-card";
import { TUser } from "../../utils/types";
import  "./admin-users-list.scss";

const cnStyles = block("UsersList");

type TAdminUsersList = {
  list: TUser[];
};

export const AdminUsersList = ({ list }: TAdminUsersList) => {
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
        <>
          {list.map((userData) => (
            <UserCard key={userData._id} data={userData} />
          ))}
        </>
      </ScrollbarContainer>
    </>
  );
};
