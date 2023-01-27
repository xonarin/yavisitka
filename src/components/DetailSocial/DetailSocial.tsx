import { FC } from "react";
import { block } from "bem-cn";
import telegram from "../../assets/images/telegram.svg";
import gitHub from "../../assets/images/gitHub.svg";
import styles from "./DetailSocial.module.scss";

const cnStyles = block("Social");

interface SocialProps {
  name: string;
  link: string;
}

const DetailSocial: FC<SocialProps> = ({ name, link }) => {
  const socialLink =
    name === "telegram" ? "https://t.me" : "https://github.com";
  const socialImage = name === "telegram" ? telegram : gitHub;
  const socialAlt = name === "telegram" ? "Телеграм" : "Github";

  return (
    <a href={`${socialLink}/${link}`} className={cnStyles("link")}>
      <img className={cnStyles("icon")} src={socialImage} alt={socialAlt} />
    </a>
  );
};

export default DetailSocial;
