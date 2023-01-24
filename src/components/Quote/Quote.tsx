import React, { FC } from "react";
import { cn } from "../../utils/bem-css-module";
import styles from "./Quote.module.scss";

const cnStyles = cn(styles, "Quote");

interface QuoteProps {
  text?: string;
  template: string | null | undefined;
}

const Quote: FC<QuoteProps> = ({ text, template }) => {
  return (
    <div className={cnStyles() + " " + cnStyles(template)}>
      {/* <img className={cnStyles('quoteIcon')} src={quote} alt="Цитата" /> */}
      <blockquote className={cnStyles("text")}>
        Делай, что должно и будь, что будет.
      </blockquote>
    </div>
  );
};

export default Quote;
