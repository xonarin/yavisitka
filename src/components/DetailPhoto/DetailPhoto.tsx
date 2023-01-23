import React, { FC, useState } from "react";
import { cn } from "../../utils/bem-css-module";
import ChatButton from "../ChatButton/ChatButton";
import styles from './DetailPhoto.module.scss';
import CommentBar from "../CommentBar/CommentBar";
const cnStyles = cn(styles, 'DetailPhoto');

interface DetailPhoto {
    src: string;
    alt?: string;
    reactions: number;
}

const DetailPhoto: FC<DetailPhoto> = ({ src, alt, reactions}) => {
    const [isOpened, setIsOpened] = useState<boolean>(false);

    function handleClick() {
        setIsOpened(!isOpened)
    }
    

    return (
        <div className={cnStyles()}>
            <img className={cnStyles('Image')} src={src} alt={`Фотография студента ${alt}`} />
            <ChatButton isOpened={handleClick} isShow={true} counter={reactions} />
            {isOpened && <CommentBar/>}
        </div>
    )
}

export default DetailPhoto;