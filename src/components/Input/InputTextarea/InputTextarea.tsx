import { ChangeEventHandler, FC } from "react";
import { block } from "bem-cn";
import "./InputTextarea.scss";

const cnStyles = block("InputTextarea");

interface InputTextAreaProps {
  name: string;
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  maxLength: number;
}

export const InputTextarea: FC<InputTextAreaProps> = ({
  name,
  placeholder,
  value,
  onChange,
  maxLength,
}) => {
  return (
    <textarea
      className={cnStyles("textarea")}
      placeholder={placeholder}
      name={name}
      defaultValue={value}
      maxLength={maxLength}
      onChange={onChange}
    ></textarea>
  );
};
