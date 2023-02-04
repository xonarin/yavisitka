import React, { useEffect, useState } from "react";
import { block } from "bem-cn";
import "./SettingsUsersBlock.scss";
import { getCookie } from "../../utils/cookie";
import { getUsers } from "../../utils/api";
import { TUsersDataSet } from "../../utils/types";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { ScrollbarContainer } from "../AdminScrollbarContainer/AdminScrollbarContainer";
import { SettingsUserCard } from "../SettingsUserCard/SettingsUserCard";

const cnStyles = block("SettingUsersBlock");

export function SettingUsersBlock() {
  const userCookie = getCookie("realUser");
  const [isLoading, setIsLoading] = useState(false);
  const [realUser, setRealUser] = useState(
    userCookie ? JSON.parse(userCookie) : ""
  );
  const [name, setName] = useState("undefined");
  const [cohort, setCohort] = useState("undefined");

  const [fakeEmail, setFakeEmail] = useState(
    getCookie("fakeEmail") || realUser.default_email
  );

  const [{ usersTotal, users }, setUsers] = useState<TUsersDataSet>({
    usersTotal: 0,
    users: [],
  });

  useEffect(() => {
    setIsLoading(true);
    getUsers()
      .then((res) => {
        if (res) {
          setUsers({ usersTotal: res.total, users: res.items });
        }
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
        setTimeout(()=>{console.log(users)},500);
      });
  }, []);

  useEffect(() => {
    const baseData = users.find((user) => user.email === fakeEmail);
    console.log(baseData);
    if (baseData) {
      setName(baseData.name);
      setCohort(baseData.cohort);
    } else {
      setName("нет данных (в базе VISITKI)");
      setCohort("нет данных (в базе VISITKI)");
    }
  }, [users, fakeEmail]);

  //   console.log(realUser);

 

  return (
    <div className={cnStyles()}>
      {isLoading && <LoadingSpinner />}

      {!isLoading && (
        <>
          <p>Выбраный пользователь: </p>
          <div className={cnStyles("info-block")}>
            <p>Имя:</p>
            <span className={cnStyles("info-span")}>{`${name}`}</span>

            <p>Email:</p>
            <span className={cnStyles("info-span")}>{`${fakeEmail}`}</span>

            <p>Когорта: </p>
            <span className={cnStyles("info-span")}>{`${cohort}`}</span>
          </div>
          <ScrollbarContainer
            negativHeightAdjustment={500}
          >
            <SettingsUserCard setEmail={setFakeEmail} email={realUser.default_email} />
            {users.map(user=><SettingsUserCard setEmail={setFakeEmail} key={user._id} email={user.email} ></SettingsUserCard>)}
            
          </ScrollbarContainer>
        </>
      )}
    </div>
  );
}
