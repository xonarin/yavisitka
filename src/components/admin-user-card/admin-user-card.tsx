import React, { ChangeEventHandler, useState, useMemo } from "react";
import styles from "./admin-user-card.module.scss";
import { cn } from "../../utils/bem-css-module";
import { Link } from "react-router-dom";

const cnStyles = cn(styles, "Card");

export const UserCard = ({ data }: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [changedCohort, setChangedCohort] = useState(data.cohort);
  const [changedEmail, setChangedEmail] = useState(data.email);
  const changedStyle = {
    color: "rgb(56, 100, 245)",
  };

  function handleOnChange(event: any) {
    const { name, value } = event.nativeEvent.target;
    if (name === "email") {
      setChangedEmail(value);
    }
    if (name === "cohort") {
      setChangedCohort(value);
    }
  }

  return (
    <ul className={cnStyles()}>
      <li className={cnStyles("content")}>
        {/* <Link to={`/cohort/${data.cohort}`}>{data.cohort}</Link> */}
        <input
          style={data.cohort !== changedCohort ? changedStyle : {}}
          className={cnStyles("input")}
          defaultValue={data.cohort}
          type="text"
          name="cohort"
          onChange={handleOnChange}
          placeholder="Когорта"
        />
      </li>
      <li className={cnStyles("content")}>
        {/* {data.email} */}
        <input
        style={data.email !== changedEmail ? changedStyle : {}}
          className={cnStyles("input")}
          defaultValue={data.email}
          type="text"
          name="email"
          onChange={handleOnChange}
          placeholder="Email"
        />
      </li>
      <li className={cnStyles("content")}>
        <Link to={`/detail/${data._id}`}>{data.name}</Link>
      </li>
    </ul>
  );
};
