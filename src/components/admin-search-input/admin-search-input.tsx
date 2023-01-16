import React from "react";
import styles from "./admin-search-input.module.scss";
import { cn } from "../../utils/bem-css-module";
const cnStyles = cn(styles, "SearchInput");

export const AdminSearchInput = () => {
  return (
    <div className={cnStyles()}>
      <p>Фильтровать</p>
      <input
        type="text"
        name="first_name"
        placeholder="По имени или фамилии или почте или номеру когорты (введите любой из этих параметров)"
      />
    </div>
  );
};
