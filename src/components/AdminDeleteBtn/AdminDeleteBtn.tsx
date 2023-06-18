import { UniversalSpinner } from "../AdminUniversalSpinner/UniversalSpiner";
import { block } from "bem-cn";
import "./AdminDeleteBtn.scss";

const cnStyles = block("DeleteBtn");

type TAdminDeleteDtn = {
  isLoading: boolean;
  isDeleted: boolean;
  handleDelete: () => void;
};

export default function AdminDeleteBtn({
  isLoading,
  isDeleted,
  handleDelete,
}: TAdminDeleteDtn) {
  return (
    <div className={cnStyles("button-container")}>
      {isLoading && <UniversalSpinner size={15} minH={24} />}
      {!isDeleted && !isLoading && (
        <button
          className={cnStyles("delete-button")}
          onClick={handleDelete}
          type="button"
          aria-label="Удалить"
        ></button>
      )}
    </div>
  );
}
