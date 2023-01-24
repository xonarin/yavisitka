import React from "react";
import { cn } from "../../utils/bem-css-module";
import styles from "./ProfileChangePage.module.scss";
import Container from "../../components/Container/Container";
import { YMaps } from "@pbe/react-yandex-maps";
import InputSuggestView from "../../components/Input/InputSuggestView/InputSuggestView";
import InputDate from "../../components/Input/InputDate/InputDate";
import { InputAvatar } from "../../components/Input/InputAvatar/InputAvatar";
import { InputText } from "../../components/Input/InputText/InputText";
import { InputTextarea } from "../../components/Input/InputTextarea/InputTextarea";
import { InputPhoto } from "../../components/Input/InputPhoto/InputPhoto";
import DropdownMenu from "../../components/DropdownCitiesHomePage/DropdownCitiesHomePage";

// картинки максимум 2мб, jpeg, gif, адаптив

const style = [
  { id: 1, name: "Серьезный" },
  { id: 2, name: "Романтичный" },
  { id: 3, name: "Дерзкий" },
];

const cnStyles = cn(styles, "ProfileChangePage");
const handleFileUpload = (e: any) => {
  let file = e.target.files[0];
  let fileSize = file.size; // 3MB

  if (fileSize > 2 * 1000000) {
    // fileSize > 2MB then show popup message
    alert(
      `Размер файла больше 2МБ.\nПожалуйста, выберите другой файл \n (временное решение)`
    );
    return;
  }
};

export const ProfilePage = () => {
  return (
    <Container>
      <section className={cnStyles("profile")}>
        <form action="#" className={cnStyles("form")} name="#">
          <label className={cnStyles("add-photo")} htmlFor="avatar">
            <div className={cnStyles("add-photo__title")}>Загрузите фото *</div>
            <div className={cnStyles("add-photo__subtitle")}>
              (размер не менее 440х440)
            </div>
          </label>
          <InputAvatar />
          <label className={cnStyles("form-name")} htmlFor="birthday">
            Дата рождения *
          </label>
          <div className={cnStyles("input-date")}>
            <InputDate />
          </div>
          <label className={cnStyles("form-name")} htmlFor="place">
            Выберете город *
          </label>
          <YMaps
            query={{
              load: "package.full",
              apikey: "6bbb9fad-fe92-4de7-aed3-2caa0584dade",
            }}
          >
            <InputSuggestView />
            {/* <CustomMap coord={profilesGet} center={[55.76, 37.64]} zoom={7}/> */}
          </YMaps>
          <label className={cnStyles("form-name")} htmlFor="telegram">
            Ник в телеграм
          </label>
          <InputText />
          <label className={cnStyles("form-name")} htmlFor="github">
            Ник на гитхабе
          </label>
          <InputText />
          <label className={cnStyles("form-name")} htmlFor="stile">
            Выберете шаблон
          </label>
          {/* TODO */}
          {/* <DropdownMenu defaultText={"Стили"} optionsList={style} /> */}
          <label className={cnStyles("form-name")} htmlFor="thesis">
            Девиз, цитата
          </label>
          <InputTextarea />
          <label className={cnStyles("form-name")} htmlFor="hobbies">
            Увлечение, досуг, интересы
          </label>
          <div className={cnStyles("form-input")}>
            <InputPhoto />
            <p className={cnStyles("alert")}>
              Рекомедуемый размер фото 230х129
            </p>
            <InputTextarea />
          </div>
          <label className={cnStyles("form-name")} htmlFor="family">
            Семья, статус, домашние животные
          </label>
          <div className={cnStyles("form-input")}>
            <InputPhoto />
            <p className={cnStyles("alert")}>
              Рекомедуемый размер фото 230х129
            </p>
            <InputTextarea />
          </div>
          <label className={cnStyles("form-name")} htmlFor="job">
            Из какой сферы пришел? Кем работаешь?
          </label>
          <InputTextarea />
          <label className={cnStyles("form-name")} htmlFor="why">
            Почему решил учиться на веб-разработчика?
          </label>
          <InputTextarea />
          <p className={cnStyles("span")}>
            Поля, отмеченный звездочкой, обязательные для заполнения
          </p>
          <input
            className={cnStyles("btn")}
            type="submit"
            value="Сохранить изменения"
          />
        </form>
      </section>
    </Container>
  );
};
