import { FC } from "react";
import { block } from 'bem-cn'; 
import "./InputTextarea.scss";

const cnStyles = block("InputTextarea");

interface InputTextAreaProps {
    name: string;
    placeholder: string;
    onChange: any;
    maxLength: number,
}

export const InputTextarea: FC<InputTextAreaProps> = ({ name, placeholder, onChange, maxLength }) => {
    return (
        <textarea className={cnStyles("textarea")} placeholder={placeholder} name={name} maxLength={maxLength} onChange={(e) => onChange(e)}></textarea>
    )
}
