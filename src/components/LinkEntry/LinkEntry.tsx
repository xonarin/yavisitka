import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../../utils/bem-css-module";
import styles from './LinkEntry.module.scss';

const cnStyles = cn(styles, 'Link');

const LinkEntry = () => {
    return (
        <Link to={'/'} className={cnStyles()}>
            Войти с Яндекс ID
        </Link>
    )
}

export default LinkEntry;