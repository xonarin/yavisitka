import { useState, useEffect, useRef, FC } from "react";
import { block } from 'bem-cn'; 
import { Link } from "react-router-dom";
import ChatButton from "../ChatButton/ChatButton";
import CommentBar from "../CommentBar/CommentBar";
import { TReactions } from "../../utils/types";
import { getReactions } from "../../utils/api";
import useOnClickOutside from "../../services/hooks/useOnClickOutside";
import "./ClassmateCard.scss";

const cnStyles = block("ClassmateCard");

type TProps = {
  cardsData: {
    _id: string;
    createdAt: number;
    updatedAt: number | null;
    email: string;
    cohort: string;
    profile: {
      name: string;
      photo: string;
      city: {
        name: string;
        geocode: string[];
      };
    };
  };
};

const ClassmateCard: FC<TProps> = ({ cardsData }) => {
  const [isShown, setIsShown] = useState(false);
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [reactions, setReactions] = useState<TReactions>({
    total: 0,
    items: [],
  });
  const { name, photo } = cardsData.profile;
  const { name: city } = cardsData.profile.city;
  const { _id: id } = cardsData;
  let cardRef = useRef(null);
  useOnClickOutside(cardRef, () => setIsOpened(false));

  function handleClick() {
    setIsOpened(!isOpened);
  }

  useEffect(() => {
    getReactions(id)
      .then((res) => {
        if (res) {
          setReactions({ ...reactions, total: res.total, items: res.items });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div
      ref={cardRef}
      className={cnStyles()}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <Link to={`/detail/${id}`} className={cnStyles("link")}>
        <figure className={cnStyles("figure")}>
          <div className={cnStyles("wrapperBorder")}>
            <img
              className={cnStyles("matePhoto")}
              src={photo}
              alt="Фотография студента"
            />
          </div>
          <figcaption className={cnStyles("captionContainer")}>
            <p className={cnStyles("captionPrimary")}>{name}</p>
            <p className={cnStyles("captionSecondary")}>{city}</p>
            <p className={cnStyles("captionSecondary")}>
              {reactions.total === 1
                ? `${reactions.total} сообщение`
                : reactions.total < 5 && reactions.total !== 0
                ? `${reactions.total} сообщения`
                : `${reactions.total} сообщений`}
            </p>
          </figcaption>
        </figure>
      </Link>
      <ChatButton
        isOpened={handleClick}
        isShow={isShown}
        counter={reactions.total <= 99 ? String(reactions.total) : "99+"}
      />
      {isOpened && <CommentBar comments={reactions.items} />}
    </div>
  );
};

export default ClassmateCard;
