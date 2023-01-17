import React, {FC} from "react";
import styles from "./ChatButton.module.scss";
import {cn} from "../../utils/bem-css-module";
import useWindowSize from "../../services/hooks/useWindowSize";

type TProps = {
    counter: string,
    isShow: boolean
}

const cnStyles = cn(styles, "ChatButton");
const btnImage = require("../../images/сhat-btn.svg");

const ChatButton: FC<TProps> = (props) => {
    const smallCounter = {
        width: '20px',
        right: '-7px'
    };
    const bigCounter = {
        width: '28px',
        right: '-14px'
    }
    const size = useWindowSize();

    return size.width < 768 ?
        (<div className={cnStyles()}>
                <button type="button" name="chatButton" className={cnStyles("button")}>
                    <img className={cnStyles('buttonImg')} src={btnImage} alt="Значок кнопки чата"/>
                </button>

                <p className={cnStyles('commentCounter')}
                   style={props.counter.length < 2 ? smallCounter : bigCounter}>{props.counter}</p>
            </div>
        ) : props.isShow ? (<div className={cnStyles()}>
                <button type="button" name="chatButton" className={cnStyles("button")}>
                    <img className={cnStyles('buttonImg')} src={btnImage} alt="Значок кнопки чата"/>
                </button>

                <p className={cnStyles('commentCounter')}
                   style={props.counter.length < 2 ? smallCounter : bigCounter}>{props.counter}</p>
            </div>
        ) : null
};

export default ChatButton
