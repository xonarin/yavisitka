import React, { useEffect, useState, MouseEvent, useRef } from "react";
import { Link } from "react-router-dom";
import { block } from "bem-cn";
import "./MiniProfile.scss";
import { profilesGet } from "../../utils/api-test-data";
import { getCookie } from "../../utils/cookie";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import useOnClickOutside from "../../services/hooks/useOnClickOutside";
import adminAvatar from "../../assets/images/admin-avatar.svg";
// import { setAuthUser } from "../../services/auth/auth";

const cnStyles = block("MiniProfile");

const MiniProfile = () => {
  const userId = "abfccdaa23e0bd1c4448d2f3"; //ХардID юзера который якобы авторизовался
  let user = profilesGet.items.find((item) => item._id === userId);
  const userCookie = getCookie("realUser");
  const realUser = userCookie ? JSON.parse(userCookie) : "";

  const [showMenu, setShowMenu] = useState({ display: "none" });
  const [isAdmin, setAdmin] = useState<boolean>(false);

  useEffect(() => {
    if (getCookie("status")) {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
  }, []);

  const handleMouseOver = (event: MouseEvent<HTMLElement>) => {
    setShowMenu({ display: "flex" });
  };

  const ref = useRef(null);

  useOnClickOutside(ref, () => {
    setShowMenu({ display: "none" });
  });

  const handleClick = () => {
    setShowMenu({ display: "none" });
  };

  return (
    <div className={cnStyles()} onMouseOver={handleMouseOver} ref={ref}>
      {isAdmin ? (
        <>
          <Link className={cnStyles("link")} to="/admin">
            <img
              className={cnStyles("avatar")}
              src={adminAvatar}
              alt="админка"
            />
            <p className={cnStyles("name")}>админка</p>
          </Link>
          <HeaderMenu
            style={showMenu}
            onClick={handleClick}
            user={user}
            realUser={realUser}
            isAdmin={isAdmin}
          />
        </>
      ) : (
        <>
          <Link className={cnStyles("link")} to="/profile">
            <img
              className={cnStyles("avatar")}
              src={realUser.avatarUrl}
              alt={realUser.real_name}
            />
            <p className={cnStyles("name")}>{realUser.real_name}</p>
          </Link>
          <HeaderMenu
            style={showMenu}
            onClick={handleClick}
            user={user}
            realUser={realUser}
            isAdmin={isAdmin}
          />
        </>
      )}
    </div>
  );
};

export default MiniProfile;
