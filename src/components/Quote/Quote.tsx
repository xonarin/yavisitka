import React, { FC } from "react";
import { block } from 'bem-cn';
import "./Quote.scss";

const cnStyles = block("Quote");

interface QuoteProps {
  text?: string;
  template: string | null | undefined;
}

const Quote: FC<QuoteProps> = ({ text, template }) => {
  return (
    <div className={cnStyles() + " "  + template && cnStyles({ type: template})}>
      <blockquote className={cnStyles("text")}>
        Делай, что должно и будь, что будет.
      </blockquote>
    </div>
  );
};

export default Quote;