import { FC, useContext, useState, useEffect, useCallback } from "react";
import { block } from "bem-cn";
import "./EmojiButton.scss";
import { TEmojis } from "../../utils/types";
import { postComment } from "../../utils/api";

const cnStyles = block("EmojiButton");

type TProps = {
  emoji: string;
  comments: {
    _id: string;
    from: {
      _id: string;
      name: string;
      email: string;
    };
    target: string | null;
    text?: string;
    emotion?: string;
  }[];
};

const emojis = {
  like: "👍",
  dislike: "👎",
  hi: "👋",
  smile: "🙂",
  sad: "😞",
  rofl: "🤣",
  strange: "😬",
  fear: "😱",
  love: "😍",
  heart: "🖤",
};

const EmojiButton: FC<TProps> = ({ emoji, comments }) => {
  const [counter, setCounter] = useState<number>(0)

  useEffect(() => {
    setCounter(comments.reduce((acc, comment) => {
      // @ts-ignore
      if (comment.emotion && emojis[comment.emotion] === emoji) {
        acc++;
      }
      return acc;
    }, 0));
  }, [])

  const onClick = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.currentTarget;
    if (!target.classList.contains(`${cnStyles("buttonCont")}`)) {
      setCounter(counter + 1);
      target.classList.add(`${cnStyles("buttonCont")}`);
    } else {
      setCounter(counter - 1);
      target.classList.remove(`${cnStyles("buttonCont")}`);
    }

  }, [counter])

  return (
    <li className={cnStyles()}>
      <button className={`${cnStyles("button")}`} onClick={(e) => onClick(e)}>
        <p className={cnStyles("emoji")}>{emoji}</p>
        <p className={cnStyles("counter")}>{counter !== 0 ? counter : ''}</p>
      </button>
    </li>
  );
};

export default EmojiButton;
