import { getCookie } from "./cookie";
import {
  TProfileId,
  TCards,
  TCommentsResponseDataSet,
  TReactions,
  TUsersResponseDataSet,
  TRawUser,
  TUser,
  TPutUserResponse,
} from "./types";

export const baseAuthUrl = "https://oauth.yandex.ru";
export const baseApiUrl = "http://localhost:3000";

export const checkResponse = <T>(res: Response): Promise<T> => {
  if (res.ok) {
    return res.json();
  } else {
    const error = res.json();
    throw new Error(`${error}`);
  }
};

export const getProfiles = async () => {
  const res = await fetch(`${baseApiUrl}/profiles`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return checkResponse<TCards>(res);
};

export const getProfilesId = async (id: string | undefined) => {
  const res = await fetch(`${baseApiUrl}/profiles/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return checkResponse<TProfileId>(res);
};

export const getReactions = async (id: string) => {
  const res = await fetch(`${baseApiUrl}/profiles/${id}/reactions`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return checkResponse<TReactions>(res);
};

export const getUsers = async () => {
  const res = await fetch(`${baseApiUrl}/users`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return checkResponse<TUsersResponseDataSet>(res);
};

export const getComments = async () => {
  const res = await fetch(`${baseApiUrl}/comments`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return checkResponse<TCommentsResponseDataSet>(res);
};

export const deleteComment = (_id: string) => {
  return fetch(`${baseApiUrl}/comments/${_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const updateProfile = async (profile: TProfileId) => {
  console.log(profile);
  const res = await fetch(`${baseApiUrl}/profiles/${profile._id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie('accessToken')}`
    },
    body: JSON.stringify({})
  });

  return checkResponse(res);
}

export const postComment = async(com: {target: string | null, text?: string, emotion?: string}, id: string) => {
  const res = await fetch(`/profiles/${id}/reactions`, {
    method: 'POST',
    headers: {
      Authorisation: `Bearer ${getCookie('accessToken')}`
    },
    body: JSON.stringify({
      emotion: com.emotion,
      target: com.target,
      text: com.text,
    })
  });
  return checkResponse<TCommentsResponseDataSet>(res);
}

// export const deleteCommentEmotion = (id: string) => {
//   return fetch(`/comments/${id}`, { 
//     method: 'DELETE',
//     headers: {
//       Authorisation: `Bearer ${getCookie('accessToken')}`
//     }
//   }).then(res => res.ok ? res : 'Ошибка')
// }

export const putUser = async (id: string, {cohort, email}: TRawUser) => {
  const res = await fetch(`/users/${id}`, {
    method: 'PUT',
    headers: {
      Authorisation: `${getCookie('token')}`
    },
    body: JSON.stringify({
      cohort, 
      email 
    })
  })

  return checkResponse<TPutUserResponse>(res)
}

export const postUser = async (user: TRawUser) => {
  const res = await fetch('/users', {
    method: 'POST',
    headers: {
      Authorisation: `${getCookie('token')}`
    },
    body: JSON.stringify({
      user: user
    })
  })

  return checkResponse<TUser>(res)
}
