import React, { useEffect, useState } from "react";
import { block } from "bem-cn";
import "./SettingsUsersBlock.scss";
import { getAuthUser, getCookie, setAuthUser } from "../../utils/cookie";
import { getProfiles, getUsers } from "../../utils/api";
import { TCards, TProfile, TUsersDataSet } from "../../utils/types";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { ScrollbarContainer } from "../AdminScrollbarContainer/AdminScrollbarContainer";
import { SettingsUserCard } from "../SettingsUserCard/SettingsUserCard";

const cnStyles = block("SettingUsersBlock");

type TProfiles = {
  profilesTotal: number;
  profiles: TProfile[];
};

export function SettingUsersBlock() {
  const userCookie = getCookie("realUser");
  const [isLoading, setIsLoading] = useState(false);
  const [realUser, setRealUser] = useState(
    userCookie ? JSON.parse(userCookie) : ""
  );
  const [{ _id, name, cohort, photo, email, role }, setUserData] = useState(
    getAuthUser()
  );

  const [fakeEmail, setFakeEmail] = useState(getAuthUser().email);

  const [{ profilesTotal, profiles }, setProfiles] = useState<TProfiles>({
    profilesTotal: 0,
    profiles: [],
  });

  useEffect(() => {
    setIsLoading(true);
    getProfiles()
      .then((res) => {
        if (res) {
          setProfiles({ profilesTotal: res.total, profiles: res.items });
        }
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const baseData = profiles.find((profile) => profile.email === fakeEmail);
    if (baseData) {
      const newDataSet = {
        _id: baseData._id,
        name: baseData.profile.name,
        cohort: baseData.cohort,
        email: baseData.email,
        photo: baseData.profile.photo,
        role: getCookie("status") ? "curator" : "student",
      };
      setUserData(newDataSet);
      setAuthUser(newDataSet);
    } else {
      const newDataSet = {
        _id: "",
        name: realUser.real_name,
        cohort: "",
        email: realUser.default_email,
        photo: realUser.avatarUrl,
        role: getCookie("status") ? "curator" : "student",
      };
      setUserData(newDataSet);
      setAuthUser(newDataSet);
    }
  }, [profiles, fakeEmail]);

  return (
    <div className={cnStyles()}>
      {isLoading && <LoadingSpinner />}

      {!isLoading && (
        <>
          <p>Авторизованый пользователь: </p>
          <div className={cnStyles("info-block")}>
            <p>_id:</p>
            <span className={cnStyles("info-span")}>{`${
              _id || "нет данных (в базе VISITKI)"
            } `}</span>
            <p>Имя:</p>
            <span className={cnStyles("info-span")}>{`${name}`}</span>

            <p>Email:</p>
            <span className={cnStyles("info-span")}>{`${fakeEmail}`}</span>

            <p>Когорта: </p>
            <span className={cnStyles("info-span")}>{`${
              cohort || "нет данных (в базе VISITKI)"
            }`}</span>

            <p>Фото: </p>
            <span className={cnStyles("info-span")}>{`${photo}`}</span>

            <p>Роль: </p>
            <span className={cnStyles("info-span")}>{`${role}`}</span>
          </div>

          <ScrollbarContainer negativHeightAdjustment={500}>
            <SettingsUserCard
              setEmail={setFakeEmail}
              email={realUser.default_email}
            />
            {profiles.map((profile) => (
              <SettingsUserCard
                setEmail={setFakeEmail}
                key={profile._id}
                email={profile.email}
              ></SettingsUserCard>
            ))}
          </ScrollbarContainer>
        </>
      )}
    </div>
  );
}
