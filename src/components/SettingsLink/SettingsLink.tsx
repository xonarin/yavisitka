import React from "react";
import { Link } from "react-router-dom";
import { block } from "bem-cn";
import "./SettingsLink.scss";

const cnStyles = block("SettingsLink");

export function SettingsLink() {
  return (
    <Link to={"/test"}>
      <div className={cnStyles()}></div>
    </Link>
  );
}
