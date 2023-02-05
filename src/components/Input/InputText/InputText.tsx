import React, { FC } from "react";
import { block } from "bem-cn";
import "./InputText.scss";

const cnStyles = block("InputText");

interface InputTextProps {
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const InputText: FC<InputTextProps> = ({ name, value, onChange }) => {
  return (
    <input
      type="text"
      defaultValue={value}
      placeholder="@example"
      className={cnStyles("input-text")}
      name={name}
      id={name}
      onChange={(e) => onChange(e)}
    />
  );
};
