import { FC, useState, useRef } from "react";
import { block } from "bem-cn";
import { TCommentArray } from "../../utils/types";
import ChatButton from "../ChatButton/ChatButton";
import CommentBar from "../CommentBar/CommentBar";
import "./DetailHobby.scss";
import useOnClickOutside from "../../services/hooks/useOnClickOutside";

const cnStyles = block("DetailHobby");

interface DetailHobbyProps {
  title: string;
  text: string;
  image: string;
  reactions: TCommentArray;
  template?: string | null | undefined;
}

const DetailHobby: FC<DetailHobbyProps> = ({
  title,
  text,
  image,
  reactions,
  template,
}) => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const [isOpened, setIsOpened] = useState<boolean>(false);
  let cardRef = useRef(null);

  useOnClickOutside(cardRef, () => setIsOpened(false));

  function handleClick() {
    setIsOpened(!isOpened);
  }
  console.log(reactions);
  return (
    <div
      className={cnStyles() + " " + template && cnStyles({ type: template })}
      ref={cardRef}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <ChatButton
        isOpened={handleClick}
        isShow={isShown}
        counter={reactions?.length <= 99 ? String(reactions?.length) : "99+"}
      />
      {isOpened && <CommentBar comments={reactions} />}

      <h3 className={cnStyles("title")}>{title}</h3>

      <img className={cnStyles("image")} src={image} alt={title} />
      <p className={cnStyles("Description")}>{text}</p>
    </div>
  );
};

export default DetailHobby;
