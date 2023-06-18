import React, { useEffect, useState } from "react";
import { setCookie } from "../../utils/cookie";
import { block } from "bem-cn";
import "./SettingsUserCard.scss";

const cnStyles = block("SettingsUserCard");

type TSettingsUserCard = {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
};

export function SettingsUserCard({ email, setEmail }: TSettingsUserCard) {
  const click = () => {
    setEmail(email);
    setCookie("fakeEmail", email, {
      "max-age": 604800000,
    });
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };
  return (
    <div onClick={click} className={cnStyles()}>
      <p>{`${email}`}</p>
    </div>
  );
}
