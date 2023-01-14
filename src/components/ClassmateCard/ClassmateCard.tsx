import React from "react";
import styles from './ClassmateCard.module.scss';
import {cn} from '../../utils/bem-css-module';
import {Link} from "react-router-dom";

const cnStyles = cn(styles, 'ClassmateCard');

const ClassmateCard = () => {
    const photo = require('../../utils/testPic.jpg');
    return (
        <Link to={'/user'} className={cnStyles()}>
            <figure className={cnStyles('figure')}>
                <img className={cnStyles('matePhoto')} src={photo} alt="#"/>
                <figcaption className={cnStyles('captionContainer')}>
                    <p className={cnStyles('captionPrimary')}>Иван Иванов</p>
                    <p className={cnStyles('captionSecondary')}>Ивановоgggggggggggghgdkfjghbkdebniuedhbniuedbniuebniuen</p>
                    <p className={cnStyles('captionSecondary')}>100500 сообщений</p>
                </figcaption>
            </figure>
            {/*будут еще два компонента с абсолютным позиционированием (кнопка коммента и плашка с комментами)*/}
        </Link>
    )
}

export default ClassmateCard;

