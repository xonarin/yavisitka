import React, {useState, useEffect, FC} from "react";
import styles from './ClassmateCard.module.scss';
import {cn} from '../../utils/bem-css-module';
import {Link} from "react-router-dom";
import ChatButton from "../ChatButton/ChatButton";
import CommentBar from "../CommentBar/CommentBar";
import {TReactions} from "../../utils/types";
import {getReactions} from "../../utils/api";

const cnStyles = cn(styles, 'ClassmateCard');

type TProps = {
    cardsData: {
        _id: string,
        createdAt: number,
        updatedAt: number | null,
        email: string,
        cohort: string,
        profile: {
            name: string,
            photo: string,
            city: {
                name: string,
                geocode: string[],
            },
        },
    }
}

const ClassmateCard: FC<TProps> = ({cardsData}) => {
    const [isShown, setIsShown] = useState(false);
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const [reactions, setReactions] = useState<TReactions>({total: 0, items: []});
    const {name, photo} = cardsData.profile;
    const {name: city} = cardsData.profile.city;
    const {_id: id} = cardsData;

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

    useEffect(() => {
        getReactions(id).then((res) => {
            if (res) {
                setReactions({...reactions, total: res.total, items: res.items})
            }
        }).catch((err) => {
            console.error(err)
        })
    }, [])

    return (
        <div className={cnStyles()} onMouseEnter={() => setIsShown(true)}
             onMouseLeave={() => setIsShown(false)}>
            <Link to={'/user'} className={cnStyles()}>
                <figure className={cnStyles('figure')}>
                    <div className={cnStyles('wrapperBorder')}>
                        <img className={cnStyles('matePhoto')} src={photo} alt="Фотография студента"/>
                    </div>
                    <figcaption className={cnStyles('captionContainer')}>
                        <p className={cnStyles('captionPrimary')}>{name}</p>
                        <p className={cnStyles('captionSecondary')}>{city}</p>
                        <p className={cnStyles('captionSecondary')}>{reactions.total}</p>
                    </figcaption>
                </figure>
            </Link>
            <ChatButton isOpened={handleClick} isShow={isShown} counter={'2'} />
            {isOpened && <CommentBar/>}
        </div>

    )
}

export default ClassmateCard;

