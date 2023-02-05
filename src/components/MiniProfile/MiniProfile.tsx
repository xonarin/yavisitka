import React, { useEffect, useState, MouseEvent, useRef } from "react";
import { Link } from "react-router-dom";
import { block } from "bem-cn";
import "./MiniProfile.scss";
import { profilesGet } from "../../utils/api-test-data";
import { getAuthUser, getCookie } from "../../utils/cookie";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import useOnClickOutside from "../../services/hooks/useOnClickOutside";
import adminAvatar from "../../assets/images/admin-avatar.svg";
import { getProfiles } from "../../utils/api";
// import { setAuthUser } from "../../services/auth/auth";

const cnStyles = block("MiniProfile");

const MiniProfile = () => {

  const [{ _id, name, cohort, photo, email, role }, setUserData] = useState(
    getAuthUser()
  );

  const [showMenu, setShowMenu] = useState({ display: "none" });
  const [isAdmin, setAdmin] = useState<boolean>(false);

  useEffect(() => {
    if (getAuthUser().role === "curator") {
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
            name={name}
            photo={photo}
            id={_id}
            isAdmin={isAdmin}
          />
        </>
      ) : (
        <>
          <Link className={cnStyles("link")} to="/profile">
            <img
              className={cnStyles("avatar")}
              src={photo }
              alt={name}
            />
            <p className={cnStyles("name")}>{name}</p>
          </Link>
          <HeaderMenu
            style={showMenu}
            onClick={handleClick}
            name={name}
            photo={photo}
            id={_id}
            isAdmin={isAdmin}
          />
        </>
      )}
    </div>
  );
};

export default MiniProfile;
