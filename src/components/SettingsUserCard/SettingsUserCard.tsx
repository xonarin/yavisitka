import React, { useEffect, useState } from "react";
import { setCookie } from "../../utils/cookie";

type TSettingsUserCard = {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
};

export function SettingsUserCard({ email, setEmail }: TSettingsUserCard) {
  const click = () => {
    setEmail(email);
    setCookie("fakeEmail", email, {
      "max-age": 1000000,
    });
  };
  return (
    <div onClick={click}>
      <p>{`${email}`}</p>
    </div>
  );
}
