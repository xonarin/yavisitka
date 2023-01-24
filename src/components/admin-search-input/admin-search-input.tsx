import React from "react";
import styles from "./admin-search-input.module.scss";
import { cn } from "../../utils/bem-css-module";
const cnStyles = cn(styles, "SearchInput");
export const AdminSearchInput = ({
  setSearchStr,
}: {
  setSearchStr: React.Dispatch<React.SetStateAction<string>>;
}) => {
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
        onChange={handleOnChange}
        placeholder="По имени или фамилии или почте или номеру когорты (введите любой из этих параметров)"
      />
    </div>
  );
};
