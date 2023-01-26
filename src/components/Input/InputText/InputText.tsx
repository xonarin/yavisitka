import React, { FC } from "react";
import { block } from 'bem-cn'; 
import "./InputText.scss";

const cnStyles = block("InputText");

interface InputTextProps {
    name: string;
    onChange: any;
}

export const InputText: FC<InputTextProps> = ({ name, onChange }) => {
    return (
        <input type="text" placeholder="@example" className={cnStyles("input-text")} name={name} id={name} onChange={(e) => onChange(e)} />
    )
}
