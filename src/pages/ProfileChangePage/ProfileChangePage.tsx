import React, { ChangeEvent, FormEvent, useState } from "react";
import { block } from "bem-cn";
import Container from "../../components/Container/Container";
import { YMaps } from "@pbe/react-yandex-maps";
import InputSuggestView from "../../components/Input/InputSuggestView/InputSuggestView";
import InputDate from "../../components/Input/InputDate/InputDate";
import { InputAvatar } from "../../components/Input/InputAvatar/InputAvatar";
import { InputText } from "../../components/Input/InputText/InputText";
import { InputTextarea } from "../../components/Input/InputTextarea/InputTextarea";
import { InputPhoto } from "../../components/Input/InputPhoto/InputPhoto";
import InputSelectFile from "../../components/Input/InputSelectFile/InputSelectFile";
import "./ProfileChangePage.scss";

const style = [
  { id: 1, name: "Серьезный" },
  { id: 2, name: "Романтичный" },
  { id: 3, name: "Дерзкий" },
];

const cnStyles = block("ProfileChangePage");

export const ProfilePage = () => {
  const [form, setValue] = useState({});

  const onChange = (
    e: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>
  ) => {
    setValue({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };

  const onChangeDatePicker = (date: string) => {
    setValue({ ...form, ["date"]: date });
    console.log(form);
  };

  const handleClickOptionSelect = (value: string | null) => {
    setValue({ ...form, ["styles"]: value });
    console.log(form);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //Тут может быть запрос об отправке данных из form useState. Сюда сохраняются все данные с полей
  };

  return (
    <Container>
      <section className={cnStyles("profile")}>
        <form action="#" className={cnStyles("form")} onSubmit={handleSubmit}>
          <label className={cnStyles("add-photo")} htmlFor="avatar">
            <div className={cnStyles("add-photo-title")}>Загрузите фото *</div>
            <div className={cnStyles("add-photo-subtitle")}>
              (размер не менее 440х440)
            </div>
          </label>
          <InputAvatar onChange={onChange} />

          <label className={cnStyles("form-name")} htmlFor="birthday">
            Дата рождения *
          </label>
          <div className={cnStyles("input-date")}>
            <InputDate onChangeDatePicker={onChangeDatePicker} />
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
            <InputSuggestView onChange={onChange} />
          </YMaps>

          <label className={cnStyles("form-name")} htmlFor="telegram">
            Ник в телеграм
          </label>
          <InputText name={"telegram"} onChange={onChange} />

          <label className={cnStyles("form-name")} htmlFor="github">
            Ник на гитхабе
          </label>
          <InputText name={"github"} onChange={onChange} />

          <label className={cnStyles("form-name")} htmlFor="stile">
            Выберете шаблон
          </label>

          <InputSelectFile
            defaultText={""}
            optionsList={style}
            name={"style"}
            handleClickOptionSelect={handleClickOptionSelect}
          />

          <label className={cnStyles("form-name")} htmlFor="thesis">
            Девиз, цитата
          </label>
          <InputTextarea
            name={"thesis-info"}
            onChange={onChange}
            placeholder={"Не более 100 символов"}
            maxLength={100}
          />

          <label className={cnStyles("form-name")} htmlFor="hobbies">
            Увлечение, досуг, интересы
          </label>
          <div className={cnStyles("form-input")}>
            <InputPhoto />
            <p className={cnStyles("alert")}>
              Рекомедуемый размер фото 230х129
            </p>
            <InputTextarea
              name={"hobby-info"}
              onChange={onChange}
              placeholder={"Не более 300 символов"}
              maxLength={300}
            />
          </div>

          <label className={cnStyles("form-name")} htmlFor="family">
            Семья, статус, домашние животные
          </label>
          <div className={cnStyles("form-input")}>
            <InputPhoto />
            <p className={cnStyles("alert")}>
              Рекомедуемый размер фото 230х129
            </p>
            <InputTextarea
              name={"family-info"}
              onChange={onChange}
              placeholder={"Не более 300 символов"}
              maxLength={300}
            />
          </div>

          <label className={cnStyles("form-name")} htmlFor="job">
            Из какой сферы пришел? Кем работаешь?
          </label>
          <InputTextarea
            name={"job-info"}
            onChange={onChange}
            placeholder={"Не более 300 символов"}
            maxLength={300}
          />

          <label className={cnStyles("form-name")} htmlFor="why">
            Почему решил учиться на веб-разработчика?
          </label>
          <InputTextarea
            name={"why-info"}
            onChange={onChange}
            placeholder={"Не более 300 символов"}
            maxLength={300}
          />

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
