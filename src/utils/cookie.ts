/*
// Устанавливаем куку
// Пример использования:
    setCookie('user', 'John', {secure: true, 'max-age': 3600});
*/

export function setCookie(name: string, value: string, props: any) {
  props = {
    path: "/",
    ...props,
  };
  let exp = props.expires;

  if (typeof exp == "number" && exp) {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = d;
  }

  if (exp && exp.toUTCString) {
    props.expires = exp.toUTCString();
  }

  value = encodeURIComponent(value);
  let updatedCookie = name + "=" + value;

  for (const propName in props) {
    updatedCookie += "; " + propName;
    const propValue = props[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }

  document.cookie = updatedCookie;
}

//Получаем значение куки
export function getCookie(name: string) {
  const matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

///Удаление куки
export function deleteCookie(name: string) {
  document.cookie = `token=${encodeURIComponent(name)}; max-age=${String(-1)}`;
}

export function clearCookies() {
  let cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    let eqPos = cookie.indexOf("=");
    let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=; path=/; max-age=-1;";
    document.cookie = name + "=; max-age=-1;";
  }
}

export function clearLocalStorage() {
  localStorage.clear();
}
