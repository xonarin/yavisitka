import React, {FC} from "react";
import styles from "./CommentBar.module.scss";
import {cn} from "../../utils/bem-css-module";
import EmojiButton from "../EmojiButton/EmojiButton";
import AutoTextArea from "../AutoTextArea/AutoTextArea";
import Comment from "../Comment/Comment";

const cnStyles = cn(styles, "CommentBar");
const emojis = ['👍', '👎', '👋', '🙂', '😞', '🤣', '😬', '😱', '😍', '🖤'];

type TProps = {
    comments: {
        _id: string,
        from: {
            _id: string,
            name: string,
            email: string,
        },
        target: string | null,
        text?: string,
        emotion?: string,
    }[]
}

const CommentBar: FC<TProps> = ({comments}) => {
    return (
        <div className={cnStyles()}>
            <ul className={cnStyles('commentsContainer')}>
                {comments.map((comment) => {
                    if (comment.text) {
                        return (
                            <Comment key={comment._id} comment={comment.text}/>
                        )
                    }
                })}
            </ul>
            <form className={cnStyles('commentForm')} action="">
                <AutoTextArea placeholder={'Обратная связь'}/>
            </form>
            <ul className={cnStyles('emojiContainer')}>
                {emojis.map((emoji, index) => {
                    return (
                        <EmojiButton key={index} emoji={emoji} comments={comments}/>
                    )
                })}
            </ul>

        </div>
    );
};

export default CommentBar;