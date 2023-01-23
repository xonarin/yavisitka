import React from "react";
import { cn } from "../../..//utils/bem-css-module";
import styles from './InputTextarea.module.scss';

const cnStyles = cn(styles, 'InputTextarea');

export const InputTextareaAll = () => {
    return (
<textarea placeholder={'Не более 300 символов'} className={cnStyles("textarea")} maxLength={300}></textarea>
    )
}

export const InputTextareaAbout = () => {
    return (
<textarea placeholder={'Не более 100 символов'} className={cnStyles("textarea")} maxLength={100}></textarea>
    )
}
