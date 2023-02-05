import { useState } from "react";
import { block } from "bem-cn";
import { Link } from "react-router-dom";
import { TUser } from "../../utils/types";
import "./AdminUserCard.scss";
import AdminDeleteBtn from "../AdminDeleteBtn/AdminDeleteBtn";
import { putUser } from "../../utils/api";

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

  function handleDelete() {
    if (!isDeleted) {
      setIsLoading(true);
      putUser(data._id, { cohort: "deleted", email: data.email })
        .then(() => {
          setIsDeleted(true);
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
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
          className={`${cnStyles("input")} ${
            isDeleted ? cnStyles("content-deleted") : ""
          }`}
          value={changedCohort}
          type="text"
          name="cohort"
          onChange={handleOnChange}
          placeholder="Когорта"
          disabled={!data.name.length || isDeleted}
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
          className={`${cnStyles("input")} ${
            isDeleted ? cnStyles("content-deleted") : ""
          }`}
          value={changedEmail}
          type="text"
          name="email"
          onChange={handleOnChange}
          placeholder="Email"
          disabled={!data.name.length || isDeleted}
        />
        {data.email !== changedEmail && (
          <p className={cnStyles("saved-value")}>{data.email}</p>
        )}
      </li>
      <li
        className={`${cnStyles("content")} ${
          isDeleted ? cnStyles("content-deleted") : ""
        }`}
      >
        <Link to={`/detail/${data._id}`}>{data.name}</Link>
      </li>
      {data.name.length ? (
        <li className={cnStyles("content")}>
          <AdminDeleteBtn
            handleDelete={handleDelete}
            isDeleted={isDeleted}
            isLoading={isLoading}
          />
        </li>
      ) : null}
    </ul>
  );
};
