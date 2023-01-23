import React from "react";
import { cn } from "../../..//utils/bem-css-module";
import styles from './InputText.module.scss';

const cnStyles = cn(styles, 'InputText');

export const InputText = () => {
    return (
            <input type="text" placeholder="@example" className={cnStyles("input-text")} name="#" id="telegram" />
    )
}