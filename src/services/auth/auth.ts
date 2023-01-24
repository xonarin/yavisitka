import { baseAuthUrl, checkResponse } from "../../utils/api";
import { setCookie, deleteCookie } from "../../utils/cookie";
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
        client_id: "5943887238384dbab2c210bf0dddd07d",
        client_secret: "8cef6b547d3b44778e5bbba0acf29c98",
      }),
    });

    const data = await checkResponse<TAccessToken>(res);
    console.log(data);
    setCookie("token", data.access_token, {
      secure: true,
      "max-age": data.expires_in,
    });
    localStorage.setItem("refreshToken", data.refresh_token);
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
        client_id: "5943887238384dbab2c210bf0dddd07d",
        client_secret: "8cef6b547d3b44778e5bbba0acf29c98",
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
