export const baseAuthUrl = "https://oauth.yandex.ru";
export const baseApiUrl = "http://localhost:3000";
export const clientIdSecret64 = 'NTk0Mzg4NzIzODM4NGRiYWIyYzIxMGJmMGRkZGQwN2Q6OGNlZjZiNTQ3ZDNiNDQ3NzhlNWJiYmEwYWNmMjljOTg=';

export const checkResponse = (res:Response) => { 
    if (res.ok) {
      const data = res.json();
      return data;
    } else {
      const error = res.json();
      throw new Error(`${error}`);
    }
  }