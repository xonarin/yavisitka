import {FC} from "react";
import {block} from 'bem-cn';
import useWindowSize from "../../services/hooks/useWindowSize";
import btnImage from "../../assets/images/chat-btn.svg";
import "./ChatButton.scss";

type TProps = {
    counter: string;
    isShow: boolean;
    isOpened: () => void;
};

const cnStyles = block("ChatButton");

const ChatButton: FC<TProps> = (props) => {
    const smallCounter = {
        width: "20px",
        right: "-7px",
    };
    const bigCounter = {
        width: "28px",
        right: "-14px",
    };
    const size = useWindowSize();

    const button = (
        <div className={cnStyles()}>
            <button
                onClick={props.isOpened}
                type="button"
                name="chatButton"
                className={cnStyles("button")}
            >
                <img
                    className={cnStyles("buttonImg")}
                    src={btnImage}
                    alt="Значок кнопки чата"
                />
                <p
                    className={cnStyles("commentCounter")}
                    style={props.counter.length < 2 ? smallCounter : bigCounter}
                >
                    {props.counter}
                </p>
            </button>


        </div>
    );

    return size.width <= 768 ? button : props.isShow ? button : null;
};

export default ChatButton;
