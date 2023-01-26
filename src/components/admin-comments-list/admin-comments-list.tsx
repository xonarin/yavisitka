import "./admin-comments-list.scss";
import { block } from 'bem-cn'; 
import { CommentCard } from "../../components/admin-comment-card/admin-comment-card";
import { ScrollbarContainer } from "../../components/admin-scrollbar-container/admin-scrollbar-container";
import { TComment } from "../../utils/types";
const cnStyles = block("CommentsList");

export const AdminCommentsList = ({ list }: any) => {
  return (
    <>
      <div className={cnStyles()}>
        <ul className={cnStyles("table-header")}>
          <li className={cnStyles("column-title")}>Когорта</li>
          <li className={cnStyles("column-title")}>Дата</li>
          <li className={cnStyles("column-title")}>Отправитель</li>
          <li className={cnStyles("column-title")}>Получатель</li>
          <li className={cnStyles("column-title")}>Откуда комментарий</li>
          <li className={cnStyles("column-title")}>Текст комментария</li>
        </ul>
      </div>
      <ScrollbarContainer negativHeightAdjustment={326}>
        <>
          {Boolean(list.length) || (
            <p className={cnStyles("error-text")}>
              Не удалось никого найти. Исправьте запрос или сбросьте фильтр
            </p>
          )}

          {list.map((data: TComment) => (
            <CommentCard key={data._id} data={data} />
          ))}
        </>
      </ScrollbarContainer>
    </>
  );
};
