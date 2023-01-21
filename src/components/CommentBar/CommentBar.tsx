import React from "react";
import styles from "./CommentBar.module.scss";
import {cn} from "../../utils/bem-css-module";
import EmojiButton from "../EmojiButton/EmojiButton";
import AutoTextArea from "../AutoTextArea/AutoTextArea";
import Comment from "../Comment/Comment";
import {Simulate} from "react-dom/test-utils";
import submit = Simulate.submit;

const cnStyles = cn(styles, "CommentBar");
const emojis = ['👍', '👎', '👋', '🙂', '😞', '🤣', '😬', '😱', '😍', '🖤'];
const comments = ['Классные у тебя увлечения, я тоже играю в настолки, любимая игра — Эволюция. Люблю еще музыку',
    'Классные у тебя увлечения, я тоже играю в настолки, любимая игра — Эволюция. Люблю еще музыку']

const CommentBar = () => {
    return (
        <div className={cnStyles()}>
            <ul className={cnStyles('commentsContainer')}>
                {comments.map((comment, index) => {
                    return (
                        <Comment key={index} comment={comment}/>
                    )
                })}
            </ul>
            <form className={cnStyles('commentForm')} action="">
                <AutoTextArea placeholder={'Обратная связь'}/>
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