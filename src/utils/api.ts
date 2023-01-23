import {
    IProfileId,
    TCards,
    TCommentsResponseDataSet,
    TReactions,
    TUsersResponseDataSet,
} from "./types";

export const baseAuthUrl = "https://oauth.yandex.ru";
export const baseApiUrl = "http://localhost:3000";
export const clientIdSecret64 =
  "NTk0Mzg4NzIzODM4NGRiYWIyYzIxMGJmMGRkZGQwN2Q6OGNlZjZiNTQ3ZDNiNDQ3NzhlNWJiYmEwYWNmMjljOTg=";

export const checkResponse = <T>(res: Response): Promise<T> => {
  if (res.ok) {
    return res.json();
  } else {
    const error = res.json();
    throw new Error(`${error}`);
  }
};

export const getProfiles = async () => {
  try {
    const res = await fetch(`${baseApiUrl}/profiles`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return checkResponse<TCards>(res);
  } catch (error) {
    console.log(`Ошибка: ${error}`);
  }
};

export const getProfilesId = async (id: string | undefined) => {
    try {
        const res = await fetch(`${baseApiUrl}/profiles/${id}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })

        return checkResponse<IProfileId>(res);
    } catch (error) {
        console.log(`Ошибка: ${error}`);
    }
}

export const getReactions = async (id: string) => {
  try {
    const res = await fetch(`${baseApiUrl}/profiles/${id}/reactions`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return checkResponse<TReactions>(res);
  } catch (error) {
    console.log(`Ошибка: ${error}`);
  }
};

export const getUsers = async () => {
  try {
    const res = await fetch(`${baseApiUrl}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return checkResponse<TUsersResponseDataSet>(res);
  } catch (error) {
    console.log(`Ошибка: ${error}`);
  }
};

export const getComments = async () => {
  try {
    const res = await fetch(`${baseApiUrl}/comments`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return checkResponse<TCommentsResponseDataSet>(res);
  } catch (error) {
    console.log(`Ошибка: ${error}`);
  }
};

export const deleteComment = (_id: string) => {
  return fetch(`${baseApiUrl}/comments/${_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
