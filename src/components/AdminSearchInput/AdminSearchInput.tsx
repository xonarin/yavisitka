import React from "react";
import { block } from "bem-cn";
import "./AdminSearchInput.scss";

const cnStyles = block("SearchInput");

type TAdminSearchInput = {
  setSearchStr: React.Dispatch<React.SetStateAction<string>>;
  inputValue: string;
};

export const AdminSearchInput = ({
  setSearchStr,
  inputValue,
}: TAdminSearchInput) => {
  function handleOnChange(evt: React.ChangeEvent<HTMLInputElement>) {
    setSearchStr(evt.target.value);
  }
  return (
    <div className={cnStyles()}>
      <p className={cnStyles("label")}>Фильтровать</p>
      <input
        className={cnStyles("input")}
        type="text"
        name="first_name"
        value={inputValue}
        onChange={handleOnChange}
        placeholder="По имени или фамилии или почте или номеру когорты (введите любой из этих параметров)"
      />
    </div>
  );
};
