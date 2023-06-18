import { block } from "bem-cn";
import "./AdminCheckAdding.scss";

const cnStyles = block("CheckAdding");

export default function AdminCheckAdding({
  handleDelete,
  handleSave,
}: {
  handleDelete: () => void;
  handleSave: () => void;
}) {
  return (
    <div className={cnStyles("container")}>
      <p className={cnStyles("par")}>
        Проверьте, что загруженные данные корректны и сохраните их или удалите и
        загрузите заново.
      </p>
      <div className={cnStyles("btn-container")}>
        <button
          className={cnStyles("btn", { color: "red" })}
          onClick={handleDelete}
        >
          Удалить
        </button>
        <button
          className={cnStyles("btn", { color: "blue" })}
          onClick={handleSave}
        >
          Сохранить
        </button>
      </div>
    </div>
  );
}
