import { baseAuthUrl, checkResponse, getProfiles } from "../../utils/api";
import {
  setCookie,
  deleteCookie,
  getCookie,
  setAuthUser,
} from "../../utils/cookie";
import { TAccessToken } from "../../utils/types";

export const getToken = async (code: string) => {
  try {
    const res = await fetch(`${baseAuthUrl}/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code: `${code}`,
        client_id: "eaead7d5cf4b41308d1d50dbc6d2de7c",
        client_secret: "9d31ae310b7f408d8b55c35f156eaf5b",
      }),
    });

    const data = await checkResponse<TAccessToken>(res);
    // console.log(data);
    setCookie("token", data.access_token, {
      secure: true,
      "max-age": data.expires_in,
    });

    localStorage.setItem("refreshToken", data.refresh_token);

    getRealUser({ ...data });
  } catch (error) {
    console.log(`Ошибка: ${error}`);
  }
};

export const getRealUser = async ({ access_token, expires_in }: any) => {
  try {
    const res = await fetch(
      `https://login.yandex.ru/info?oauth_token=${access_token}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await checkResponse<any>(res);
    setCookie(
      "realUser",
      JSON.stringify({
        ...data,
        avatarUrl: `https://avatars.yandex.net/get-yapic/${data.default_avatar_id}/islands-200`,
      }),
      {
        "max-age": expires_in,
      }
    );

    createAuthUser();
  } catch (error) {
    console.log(`Ошибка: ${error}`);
  }
};

export const updateToken = async () => {
  const localStore = localStorage.getItem("refreshToken");

  try {
    const res = await fetch(`${baseAuthUrl}/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: `${localStore}`,
        client_id: "eaead7d5cf4b41308d1d50dbc6d2de7c",
        client_secret: "9d31ae310b7f408d8b55c35f156eaf5b",
      }),
    });

    const data = await checkResponse<TAccessToken>(res);
    deleteCookie("token");
    localStorage.removeItem("refreshToken");
    setCookie("token", data.access_token, {
      secure: true,
      "max-age": data.expires_in,
    });
    localStorage.setItem("refreshToken", data.refresh_token);
  } catch (error) {
    console.log(`Ошибка: ${error}`);
  }
};

export const createAuthUser = () => {
  const realUserCookie = getCookie("realUser");
  const realUserData = realUserCookie ? JSON.parse(realUserCookie) : "";
  getProfiles()
    .then((res) => {
      if (res) {
        const profiles = res.items;
        const baseData = profiles.find(
          (profile) => profile.email === realUserData.default_email
        );
        if (baseData) {
          const newDataSet = {
            _id: baseData._id,
            name: baseData.profile.name,
            cohort: baseData.cohort,
            email: baseData.email,
            photo: baseData.profile.photo,
            role: getCookie("status") ? "curator" : "student",
          };

          setAuthUser(newDataSet);
        } else {
          const newDataSet = {
            _id: "",
            name: realUserData.real_name,
            cohort: "",
            email: realUserData.default_email,
            photo: realUserData.avatarUrl,
            role: getCookie("status") ? "curator" : "student",
          };
          setAuthUser(newDataSet);
        }
      }
    })
    .catch((err) => {
      console.error(err);
    });
};
