import { FC } from "react";
import { block } from 'bem-cn'; 
import "./InputTextarea.scss";

const cnStyles = block("InputTextarea");

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
