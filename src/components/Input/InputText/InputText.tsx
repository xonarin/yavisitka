import React, { FC } from "react";
import { cn } from "../../..//utils/bem-css-module";
import styles from './InputText.module.scss';

const cnStyles = cn(styles, 'InputText');

interface InputTextProps {
    name: string;
    onChange: any;
}

export const InputText: FC<InputTextProps> = ({ name, onChange }) => {
    return (
        <input type="text" placeholder="@example" className={cnStyles("input-text")} name={name} id={name} onChange={(e) => onChange(e)} />
    )
}