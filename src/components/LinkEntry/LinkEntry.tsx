import React from "react";
import { Link } from "react-router-dom";
import styles from './LinkEntry.module.scss';

const LinkEntry = () => {
    return (
        <Link to={'/'} className={styles.link}>
            Войти с Яндекс ID
        </Link>
    )
}

export default LinkEntry;