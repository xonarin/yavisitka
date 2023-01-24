import React, { FC, useState } from 'react';
import { cn } from "../../utils/bem-css-module";
import { TCommentsResponseDataSet, TReactions } from '../../utils/types';
import ChatButton from '../ChatButton/ChatButton';
import CommentBar from '../CommentBar/CommentBar';
import styles from './DetailHobby.module.scss';

const cnStyles = cn(styles, 'DetailHobby');

interface DetailHobbyProps {
    title: string;
    text: string;
    image: string;
    reactions: any;
    template?: string | null | undefined;
}

const DetailHobby: FC<DetailHobbyProps> = ({ title, text, image, reactions, template }) => {
    const [isShown, setIsShown] = useState<boolean>(false);
    const [isOpened, setIsOpened] = useState<boolean>(false);

    function handleClick() {
        setIsOpened(!isOpened)
    }

    return (
        <div className={cnStyles() + ' ' + cnStyles(template)} 
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
        >
            <ChatButton isOpened={handleClick} isShow={isShown} counter={reactions?.length <= 99 ? String(reactions?.length) : '99+'} />
            {isOpened && <CommentBar comments={reactions} />}

            <h3 className={cnStyles('Title')}>{title}</h3>

            <img className={cnStyles('Image')} src={image} alt={title} />
            <p className={cnStyles('Description')}>{text}</p>
        </div>
    )
}

export default DetailHobby;