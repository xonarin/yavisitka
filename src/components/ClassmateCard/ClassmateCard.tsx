import React, {useState, FC} from "react";
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

    //const photo = require('../../images/testPic.jpg');
    return (
        <div className={cnStyles()} onMouseEnter={() => setIsShown(true)}
             onMouseLeave={() => setIsShown(false)}>
            <Link to={'/user'} className={cnStyles()}>
                <figure className={cnStyles('figure')}>
                    <img className={cnStyles('matePhoto')} src={props.info.url} alt="#"/>
                    <figcaption className={cnStyles('captionContainer')}>
                        <p className={cnStyles('captionPrimary')}>{props.info.id}</p>
                        <p className={cnStyles('captionSecondary')}>Ивановоgggggggggggghgdkfjghbkdebniuedhbniuedbniuebniuen</p>
                        <p className={cnStyles('captionSecondary')}>{props.info.title}</p>
                    </figcaption>
                </figure>
            </Link>
            <ChatButton isShow={isShown} counter={'2'}/>
            <CommentBar/>
        </div>

    )
}

export default ClassmateCard;

