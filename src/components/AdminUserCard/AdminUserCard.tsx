import { useState } from "react";
import { block } from "bem-cn";
import { Link } from "react-router-dom";
import { TUser } from "../../utils/types";
import "./AdminUserCard.scss";
import AdminDeleteDtn from "../AdminDeleteBtn/AdminDeleteDtn";

const cnStyles = block("Card");

export const UserCard = ({ data }: { data: TUser }) => {
  const [changedCohort, setChangedCohort] = useState(data.cohort);
  const [changedEmail, setChangedEmail] = useState(data.email);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
          value={changedCohort}
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
          value={changedEmail}
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
      {
        data.cohort === changedCohort && data.name.length ?
        <li className={cnStyles("content")}>
          <AdminDeleteDtn 
            data={data} 
            isDeleted={isDeleted} 
            isLoading={isLoading} 
            setIsDeleted={setIsDeleted} 
            setIsLoading={setIsLoading} 
          />
        </li>
        : null
      }
    </ul>
  );
};
