import { FC } from "react";
import { cn } from "../../utils/bem-css-module";
import telegram from "../../assets/images/telegram.svg";
import gitHub from "../../assets/images/gitHub.svg";
import styles from "./DetailSocial.module.scss";

const cnStyles = cn(styles, "Social");

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
    <a href={`${socialLink}/${link}`} className={cnStyles("Link")}>
      <img className={cnStyles("Icon")} src={socialImage} alt={socialAlt} />
    </a>
  );
};

export default DetailSocial;
