import { block } from "bem-cn";
import { CommentCard } from "../AdminCommentCard/AdminCommentCard";
import { ScrollbarContainer } from "../AdminScrollbarContainer/AdminScrollbarContainer";
import { TComment, TCommentArray } from "../../utils/types";
import "./AdminCommentsList.scss";

const cnStyles = block("CommentsList");

type TAdminCommentsList = {
  list: TCommentArray;
};

export const AdminCommentsList = ({ list }: TAdminCommentsList) => {
  return (
    <div className={cnStyles("mobile-container")}>
      <ul className={cnStyles("table-header")}>
        <li className={cnStyles("column-title")}>Когорта</li>
        <li className={cnStyles("column-title")}>Дата</li>
        <li className={cnStyles("column-title")}>Отправитель</li>
        <li className={cnStyles("column-title")}>Получатель</li>
        <li className={cnStyles("column-title")}>Откуда комментарий</li>
        <li className={cnStyles("column-title")}>Текст комментария</li>
      </ul>
      <ScrollbarContainer negativHeightAdjustment={326}>
        {Boolean(list.length) || (
          <p className={cnStyles("error-text")}>
            Не удалось никого найти. Исправьте запрос или сбросьте фильтр
          </p>
        )}

        {list.map((data: TComment) => (
          <CommentCard key={data._id} data={data} />
        ))}
      </ScrollbarContainer>
    </div>
  );
};
