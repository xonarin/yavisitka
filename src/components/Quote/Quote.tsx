import React from "react";
import { cn } from "../../utils/bem-css-module";
import styles from './Quote.module.scss';


const cnStyles = cn(styles, 'Quote');

const Quote = () => {
    return (
        <div className={cnStyles()}>
            {/* <img className={cnStyles('quoteIcon')} src={quote} alt="Цитата" /> */}
            <blockquote className={cnStyles('text')}>
                Делай, что должно и будь, что будет.
            </blockquote>
        </div>
    )
}

export default Quote;