import React from "react";
import { Outlet } from "react-router-dom";

export const AdminContent = () => {
  return <div>
    <p>Компонент АдминКонтент</p>
    <Outlet />
  </div>;
};
