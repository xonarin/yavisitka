import { useState } from "react";
import { block } from 'bem-cn'; 
import { Link } from "react-router-dom";
import { TUser } from "../../utils/types";
import "./admin-user-card.scss";

const cnStyles = block("Card");

export const UserCard = ({ data }: { data: TUser }) => {
  const [changedCohort, setChangedCohort] = useState(data.cohort);
  const [changedEmail, setChangedEmail] = useState(data.email);
  const changedStyle = {
    color: "rgb(56, 100, 245)",
  };

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
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
        <input
          style={
            data.cohort !== changedCohort || !data.name.length
              ? changedStyle
              : {}
          }
          className={cnStyles("input")}
          defaultValue={data.cohort}
          type="text"
          name="cohort"
          onChange={handleOnChange}
          placeholder="Когорта"
        />
        {data.cohort !== changedCohort && (
          <p className={cnStyles("saved-value")}>{data.cohort}</p>
        )}
      </li>
      <li className={cnStyles("content")}>
        <input
          style={
            data.email !== changedEmail || !data.name.length ? changedStyle : {}
          }
          className={cnStyles("input")}
          defaultValue={data.email}
          type="text"
          name="email"
          onChange={handleOnChange}
          placeholder="Email"
        />
        {data.email !== changedEmail && (
          <p className={cnStyles("saved-value")}>{data.email}</p>
        )}
      </li>
      <li className={cnStyles("content")}>
        <Link to={`/detail/${data._id}`}>{data.name}</Link>
      </li>
    </ul>
  );
};
