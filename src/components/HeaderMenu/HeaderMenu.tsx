import { FC, useState, useEffect, ChangeEvent, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { block } from "bem-cn";
import "./HeaderMenu.scss";
import { clearCookies, clearLocalStorage } from '../../utils/cookie';
import adminAvatar from "../../assets/images/admin-avatar.svg"


const cnStyles = block("HeaderMenu");

type THeaderMenu = {
  name: string;
  photo: string;
  id: string;
  style: {
    display:string
  },
  onClick: () => void;
  isAdmin: boolean;
}

const HeaderMenu: FC<THeaderMenu> = ({ name, photo, id, style, onClick, isAdmin }) => {

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
      {!isAdmin 
      ? (<>
          <Link to={id ? `/detail/${id}` : "/"} className={cnStyles("userContainer")} onClick={onClick}>
            <img className={cnStyles("userIcon")} src={photo} alt={name}></img>
            <p className={cnStyles("userName")}>{name}</p>
          </Link>
          {id && <Link to='/profile' className={cnStyles("link")} onClick={onClick}>
            Профиль
          </Link>}
          
          <button type="button" className={cnStyles("button")} onClick={handleClickExit}>
            Выйти
          </button>
        </>)
      : (<>
        <Link to="/admin" className={cnStyles("userContainer")} onClick={onClick}>
          <img className={cnStyles("userIcon")} src={adminAvatar} alt="админка"></img>
          <p className={cnStyles("userName")}>{name}</p>
        </Link>
        <button type="button" className={cnStyles("button")} onClick={handleClickExit}>
          Выйти
        </button>
      </>)}
    </div>
  )
}

export default HeaderMenu;