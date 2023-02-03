import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { block } from "bem-cn";
import "./MiniProfile.scss";
import { profilesGet } from "../../utils/api-test-data";
import { getCookie } from "../../utils/cookie";

const cnStyles = block("MiniProfile");

const MiniProfile = () => {
  const userId = "abfccdaa23e0bd1c4448d2f3"; //ХардID юзера который якобы авторизовался
  let user = profilesGet.items.find((item) => item._id === userId);
  const userCookie = getCookie("realUser"); 
  const realUser = userCookie ? JSON.parse(userCookie) : "";

  return (
    <div className={cnStyles()}>
      <Link className={cnStyles("link")} to="/profile">
        <img
          className={cnStyles("avatar")}
          // src={realUser.real_name}
          src={realUser.avatarUrl}
          alt={realUser.real_name}
        />
        {/* <p className={cnStyles("name")}>{user?.profile.name}</p> */}
        <p className={cnStyles("name")}>{realUser.real_name}</p>
      </Link>
    </div>
  );
};

export default MiniProfile;
