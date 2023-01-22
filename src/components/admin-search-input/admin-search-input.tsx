import React from "react";
import styles from "./admin-search-input.module.scss";
import { cn } from "../../utils/bem-css-module";
const cnStyles = cn(styles, "SearchInput");
//@ts-ignore
export const AdminSearchInput = ({ setSearchStr }) => {
  //@ts-ignore
  function handleOnChange(evt) {
    // console.log(evt.target.value);
    setSearchStr(evt.target.value)
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
