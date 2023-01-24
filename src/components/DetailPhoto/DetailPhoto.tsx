import React, { FC, useState } from "react";
import { cn } from "../../utils/bem-css-module";
import ChatButton from "../ChatButton/ChatButton";
import styles from "./DetailPhoto.module.scss";
import CommentBar from "../CommentBar/CommentBar";
import { TReactions } from "../../utils/types";
const cnStyles = cn(styles, "DetailPhoto");

interface DetailPhoto {
  src: string;
  alt?: string;
  reactions: TReactions;
  template?: string | null | undefined;
}

const DetailPhoto: FC<DetailPhoto> = ({ src, alt, reactions, template }) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  function handleClick() {
    setIsOpened(!isOpened);
  }

  return (
    <div className={cnStyles() + " " + cnStyles(template)}>
      <img
        className={cnStyles("Image")}
        src={src}
        alt={`Фотография студента ${alt}`}
      />
      <ChatButton
        isOpened={handleClick}
        isShow={true}
        counter={reactions.total <= 99 ? String(reactions.total) : "99+"}
      />
      {isOpened && <CommentBar comments={reactions.items} />}
    </div>
  );
};

export default DetailPhoto;
