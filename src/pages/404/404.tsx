import { FC } from 'react';
import { Link } from "react-router-dom";
import { block } from "bem-cn";
import "./404.scss";
import { getCookie } from '../../utils/cookie';

const cnStyles = block("notFound");

export const Page404: FC = () => {
  const statusCookie = getCookie("status"); 
  
  return (
    <div className={cnStyles("container")}>
      <p className={cnStyles("text")}>Страница не найдена</p>
      <p className={cnStyles("number")}>404</p>
      {statusCookie 
      ? (<Link to='/admin' className={cnStyles("link")} >
          На главную
        </Link>)
      : (<Link to='/' className={cnStyles("link")} >
          На главную
        </Link>)}
    </div>
  );
}