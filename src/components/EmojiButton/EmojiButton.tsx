import {FC} from "react";
import {block} from 'bem-cn';
import "./EmojiButton.scss";
import {TEmojis} from "../../utils/types";

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

const EmojiButton: FC<TProps> = ({emoji, comments}) => {
    let counter = comments.reduce((acc, comment) => {
        // @ts-ignore
        if (comment.emotion && emojis[comment.emotion] === emoji) {
            acc++;
        }
        return acc;
    }, 0);

    return (
        <li className={cnStyles()}>
            <button className={cnStyles("button")}>
                <p className={cnStyles("emoji")}>{emoji}</p>
                <p className={cnStyles("counter")}>{counter}</p>
            </button>
        </li>
    );
};

export default EmojiButton;
