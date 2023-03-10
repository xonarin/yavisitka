import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { block } from "bem-cn";
import "./MiniProfile.scss";
import { profilesGet } from "../../utils/api-test-data";

const cnStyles = block("MiniProfile");

const MiniProfile = () => {
  const userId = "abfccdaa23e0bd1c4448d2f3"; //ХардID юзера который якобы авторизовался
  let user = profilesGet.items.find((item) => item._id === userId);

  return (
    <div className={cnStyles()}>
      <Link className={cnStyles("link")} to="/profile">
        <img
          className={cnStyles("avatar")}
          src={user?.profile.photo}
          alt={user?.profile.name}
        />
        <p className={cnStyles("name")}>{user?.profile.name}</p>
      </Link>
    </div>
  );
};

export default MiniProfile;
