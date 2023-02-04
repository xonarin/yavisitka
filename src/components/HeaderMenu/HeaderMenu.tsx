import { FC, useState, useEffect, ChangeEvent, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { profilesGet } from '../../utils/api-test-data';
import { block } from "bem-cn";
import "./HeaderMenu.scss";
import { clearCookies, clearLocalStorage } from '../../utils/cookie';
import adminAvatar from "../../assets/images/admin-avatar.svg"


const cnStyles = block("HeaderMenu");

type THeaderMenu = {
  realUser: {
    id: string
    real_name: string;
    avatarUrl: string
  } | undefined,
  user: {
    _id: string;
    createdAt: number;
    updatedAt: number | null;
    email: string;
    cohort: string;
    profile: {
      name: string;
      photo: string;
      city: {
        name: string;
        geocode: string[];
      };
    };
  }
  | undefined,
  style: {
    display:string
  },
  onClick: () => void;
  isAdmin: boolean;
}

const HeaderMenu: FC<THeaderMenu> = ({ user, realUser, style, onClick, isAdmin }) => {

  useEffect(() => {
    const closeEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClick();
      }
    }
    document.addEventListener('keydown', closeEsc);   

    return () => {
      document.removeEventListener('keydown', closeEsc);
    }
  }, []);

  const handleClickExit = () => {
    clearCookies();
    clearLocalStorage();
    sessionStorage.clear();
    window.location.reload();
  };

  return (
    <div className={cnStyles("navContainer")} style={style}>
      {!isAdmin ? (realUser 
      ? (<>
          <Link to={{pathname: `/detail/${realUser?.id}`}} className={cnStyles("userContainer")} onClick={onClick}>
            <img className={cnStyles("userIcon")} src={realUser?.avatarUrl} alt={realUser?.real_name}></img>
            <p className={cnStyles("userName")}>{realUser?.real_name}</p>
          </Link>
          <Link to='/profile' className={cnStyles("link")} onClick={onClick}>
            Профиль
          </Link>
          <button type="button" className={cnStyles("button")} onClick={handleClickExit}>
            Выйти
          </button>
        </>)
      : (<>
          <Link to={{pathname: `/detail/${user?._id}`}} className={cnStyles("userContainer")} onClick={onClick}>
            <img className={cnStyles("userIcon")} src={user?.profile.photo} alt={user?.profile.name}></img>
            <p className={cnStyles("userName")}>{user?.profile.name}</p>
          </Link>
          <Link to='/profile' className={cnStyles("link")} onClick={onClick}>
            Профиль
          </Link>
          <button type="button" className={cnStyles("button")} onClick={handleClickExit}>
            Выйти
          </button>
        </>)) : 
        (<>
          <Link to="/admin" className={cnStyles("userContainer")} onClick={onClick}>
            <img className={cnStyles("userIcon")} src={adminAvatar} alt="админка"></img>
            <p className={cnStyles("userName")}>админка</p>
          </Link>
          <button type="button" className={cnStyles("button")} onClick={handleClickExit}>
            Выйти
          </button>
        </>)}
    </div>
  )
}

export default HeaderMenu;