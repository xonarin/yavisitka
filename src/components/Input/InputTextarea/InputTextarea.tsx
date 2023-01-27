import { ChangeEventHandler, FC } from "react";
import { block } from "bem-cn";
import "./InputTextarea.scss";

const cnStyles = block("InputTextarea");

interface InputTextAreaProps {
  name: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  maxLength: number;
}

export const InputTextarea: FC<InputTextAreaProps> = ({
  name,
  placeholder,
  onChange,
  maxLength,
}) => {
  return (
    <textarea
      className={cnStyles("textarea")}
      placeholder={placeholder}
      name={name}
      maxLength={maxLength}
      onChange={onChange}
    ></textarea>
  );
};
