import { UniversalSpinner } from "../AdminUniversalSpinner/UniversalSpiner";
import { block } from "bem-cn";
import './AdminDeleteBtn.scss';
import { deleteComment, putUser } from "../../utils/api";
import { TComment, TUser } from "../../utils/types";
import { useLocation } from "react-router-dom";

const cnStyles = block("DeleteBtn");

type TAdminDeleteDtn = {
  isLoading: boolean, 
  isDeleted: boolean,
  setIsLoading: (isLoading: boolean) => void,
  setIsDeleted: (isDeleted: boolean) => void,
  data: TUser | TComment,
}

export default function AdminDeleteDtn({isLoading, isDeleted, setIsDeleted, setIsLoading, data}: TAdminDeleteDtn) {
  const location = useLocation();

  function isUser(data: TUser | TComment): data is TUser {
    return (data as TUser).cohort !== undefined; 
  }

  function handleDelete() {
    if (!isDeleted) {
      setIsLoading(true);
      location.pathname === '/admin/comment' 
      && deleteComment(data._id)
      .then(() => {
        setIsDeleted(true);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
      location.pathname === '/admin/users' && isUser(data)
      && putUser(data._id, {cohort: 'deleted', email: data.email}) //
      .then(() => {
        setIsDeleted(true);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
    }
  }
  
  return (
    <div className={cnStyles("button-container")}>
      {isLoading && <UniversalSpinner size={15} minH={24} />}
      {!isDeleted && !isLoading && (
      <button
        className={cnStyles("delete-button")}
        onClick={handleDelete}
        type="button"
        aria-label="Удалить комментарий"
      ></button>
      )}
    </div>
  )
}