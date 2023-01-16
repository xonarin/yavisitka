import React from "react";
import styles from './LoadingSpinner.module.scss';
import {cn} from "../../utils/bem-css-module";

const cnStyles = cn(styles, 'LoadingSpinner');

export default function LoadingSpinner() {
    return (
        <div className={cnStyles()}>
            <div className={cnStyles('spinner')}>
            </div>
        </div>
    );
}