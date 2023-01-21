import React, {FC} from "react";
import styles from "./EmojiButton.module.scss";
import {cn} from "../../utils/bem-css-module";

const cnStyles = cn(styles, "EmojiButton");

type TProps = {
    emoji: string,
}

const EmojiButton: FC<TProps> = (props) => {
    return (
        <li className={cnStyles()}>
            <button className={cnStyles('button')}>
                <p className={cnStyles('emoji')}>{props.emoji}</p>
                <p className={cnStyles('counter')}>99+</p>
            </button>
        </li>

    )
}

export default EmojiButton;