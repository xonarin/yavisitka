import React, { FC, useState } from 'react';
import { cn } from "../../utils/bem-css-module";
import ChatButton from '../ChatButton/ChatButton';
import CommentBar from '../CommentBar/CommentBar';
import styles from './DetailHobby.module.scss';

const cnStyles = cn(styles, 'DetailHobby');

interface DetailHobbyProps {
    title: string;
    text: string;
    image: string;
    reactions: number;
}

const DetailHobby: FC<DetailHobbyProps> = ({ title, text, image, reactions }) => {
    const [isShown, setIsShown] = useState<boolean>(false);
    const [isOpened, setIsOpened] = useState<boolean>(false);

    function handleClick() {
        setIsOpened(!isOpened)
    }

    return (
        <div className={cnStyles()} 
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
        >
            <ChatButton isOpened={handleClick} isShow={isShown} counter={reactions} />
            {isOpened && <CommentBar/>}

            <div className={cnStyles('Head')}>
                <h3 className={cnStyles('Title')}>{title}</h3>
            </div>

            <img className={cnStyles('Image')} src={image} alt={title} />
            <p className={cnStyles('Description')}>{text}</p>
        </div>
    )
}

export default DetailHobby;