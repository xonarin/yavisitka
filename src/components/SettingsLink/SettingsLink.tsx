import React from "react";
import { Link, useLocation } from "react-router-dom";
import { block } from "bem-cn";
import "./SettingsLink.scss";

const cnStyles = block("SettingsLink");

export function SettingsLink() {
  const { pathname } = useLocation();
  return (
    <Link to={pathname.endsWith("test") ? "/" : "/test"}>
      <div className={cnStyles()}></div>
    </Link>
  );
}
