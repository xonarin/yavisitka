import React from "react";
import styles from "./CommentBar.module.scss";
import {cn} from "../../utils/bem-css-module";
import EmojiButton from "../EmojiButton/EmojiButton";

const cnStyles = cn(styles, "CommentBar");
const emojis = ['👍', '👎', '👋', '🙂', '😞', '🤣', '😬', '😱', '😍', '🖤'];

const CommentBar = () => {
    return (
        <div className={cnStyles()}>
            <div className={cnStyles('commentsContainer')}></div>
            <form className={cnStyles('commentForm')} action="">
                <textarea className={cnStyles('commentInput')} placeholder={'Обратная связь'} rows={1}></textarea>
            </form>
            <ul className={cnStyles('emojiContainer')}>
                {emojis.map((emoji, index) => {
                    return (
                        <EmojiButton key={index} emoji={emoji}/>
                    )
                })}
            </ul>

        </div>
    );
};

export default CommentBar;