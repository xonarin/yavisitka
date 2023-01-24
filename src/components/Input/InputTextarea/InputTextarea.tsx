import React, { FC } from "react";
import { cn } from "../../..//utils/bem-css-module";
import styles from './InputTextarea.module.scss';

const cnStyles = cn(styles, 'InputTextarea');

interface InputTextAreaProps {
    name: string;
    placeholder: string;
    onChange: any;
}

export const InputTextarea: FC<InputTextAreaProps> = ({ name, placeholder, onChange }) => {
    return (
        <textarea className={cnStyles("textarea")} placeholder={placeholder} name={name} maxLength={300} onChange={(e) => onChange(e)}></textarea>
    )
}
