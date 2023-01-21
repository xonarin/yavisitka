import React, {useState, useEffect, FC} from "react";
import styles from './ClassmateCard.module.scss';
import {cn} from '../../utils/bem-css-module';
import {Link} from "react-router-dom";
import ChatButton from "../ChatButton/ChatButton";
import CommentBar from "../CommentBar/CommentBar";


const cnStyles = cn(styles, 'ClassmateCard');

type TProps = {
    info: {
        albumId: number,
        id: number,
        title: string,
        url: string,
        thumbnailUrl: string,
    }
}

const ClassmateCard: FC<TProps> = (props) => {
    const [isShown, setIsShown] = useState(false);
    const [isOpened, setIsOpened] = useState<boolean>(false);

    function handleClick() {
        setIsOpened(!isOpened)
    }

    useEffect(() => {
        const keyHandler = (evt: { key: string }) => {
            if (evt.key === "Escape") {
                setIsOpened(false);
            }
        };
        if (isOpened) {
            document.addEventListener("keydown", keyHandler);
            return () => {
                document.removeEventListener("keydown", keyHandler);
            };
        }
    }, [isOpened]);

    return (
        <div className={cnStyles()} onMouseEnter={() => setIsShown(true)}
             onMouseLeave={() => setIsShown(false)}>
            <Link to={'/user'} className={cnStyles()}>
                <figure className={cnStyles('figure')}>
                    <div className={cnStyles('wrapperBorder')}>
                        <img className={cnStyles('matePhoto')} src={props.info.url} alt="#"/>
                    </div>
                    <figcaption className={cnStyles('captionContainer')}>
                        <p className={cnStyles('captionPrimary')}>{props.info.id}</p>
                        <p className={cnStyles('captionSecondary')}>Ивановоgggggggggggghgdkfjghbkdebniuedhbniuedbniuebniuen</p>
                        <p className={cnStyles('captionSecondary')}>{props.info.title}</p>
                    </figcaption>
                </figure>
            </Link>
            <ChatButton isOpened={handleClick} isShow={isShown} counter={'2'}/>
            {isOpened && <CommentBar/>}
        </div>

    )
}

export default ClassmateCard;

