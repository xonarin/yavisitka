import React, { FC, useRef, useState } from "react";
import { block } from "bem-cn";
import ChatButton from "../ChatButton/ChatButton";
import "./DetailPhoto.scss";
import CommentBar from "../CommentBar/CommentBar";
import { TReactions } from "../../utils/types";
import useOnClickOutside from "../../services/hooks/useOnClickOutside";

const cnStyles = block("DetailPhoto");

interface DetailPhoto {
  src: string;
  alt?: string;
  reactions: TReactions;
  template?: string | null | undefined;
}

const DetailPhoto: FC<DetailPhoto> = ({ src, alt, reactions, template }) => {
  const [isShown, setIsShown] = useState(false);
  const [isOpened, setIsOpened] = useState<boolean>(false);
  let cardRef = useRef(null);

  useOnClickOutside(cardRef, () => setIsOpened(false));

  function handleClick() {
    setIsOpened(!isOpened);
  }

  return (
    <div
      className={cnStyles("container")}
      ref={cardRef}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <div
        className={cnStyles() + " " + template && cnStyles({ type: template })}
      >
        <img
          className={cnStyles("image")}
          src={src}
          alt={`Фотография студента ${alt}`}
        />
      </div>
      <ChatButton
        isOpened={handleClick}
        isShow={isShown}
        counter={reactions.total <= 99 ? String(reactions.total) : "99+"}
      />
      {isOpened && <CommentBar comments={reactions.items} />}
    </div>
  );
};

export default DetailPhoto;
