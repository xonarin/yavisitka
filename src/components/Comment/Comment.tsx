import { block } from 'bem-cn'; 
import "./Comment.scss";

const cnStyles = block("Comment");

const Comment = (props: { comment: string }) => {
  return (
    <li className={cnStyles()}>
      <p className={cnStyles("content")}>{props.comment}</p>
    </li>
  );
};

export default Comment;
