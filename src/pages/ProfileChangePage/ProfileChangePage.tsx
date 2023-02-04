import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
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
import { TProfileId } from "../../utils/types";
import { getProfilesId, updateProfile } from "../../utils/api";

const style = [
  { id: 1, name: "Серьезный" },
  { id: 2, name: "Романтичный" },
  { id: 3, name: "Дерзкий" },
];

const cnStyles = block("ProfileChangePage");

export const ProfilePage = () => {
  const [form, setValue] = useState<{ [key: string]: string | null }>({});
  const [profile, setProfile] = useState<TProfileId>();

  const id = '2cb3baaa7528a9bb5e2c20d9';

  useEffect(() => {
    getProfilesId(id)
      .then((res) => {
        if (res) {
          setProfile(res);
          
        }
      })
      .catch((err) => {
        console.error(err);
      })
  }, []);

  console.log(profile);

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
    setValue({ ...form, styles: value });
    console.log(form);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //Тут может быть запрос об отправке данных из form useState. Сюда сохраняются все данные с полей
    updateProfile(id)
      .then((res) => {
        console.log("Профиль обновлен");
      })
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

            {/* <InputDate onChangeDatePicker={onChangeDatePicker} initial={profile?.profile.birthday} /> */}
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
            {profile && (<InputSuggestView onChange={onChange} initialValue={String(profile?.profile.city.name)} />)}
          </YMaps>

          <label className={cnStyles("form-name")} htmlFor="telegram">
            Ник в телеграм
          </label>
          <InputText
            name={"telegram"}
            // value={form["telegram"] || ""}
            value={String(profile?.profile.telegram)}
            onChange={onChange}
          />

          <label className={cnStyles("form-name")} htmlFor="github">
            Ник на гитхабе
          </label>
          <InputText
            name={"github"}
            // value={form["github"] || ""}
            value={String(profile?.profile.github)}
            onChange={onChange}
          />

          <label className={cnStyles("form-name")} htmlFor="stile">
            Выберете шаблон
          </label>

          <InputSelectFile
            defaultText={""}
            optionsList={style}
            name={"style"}
            handleClickOptionSelect={handleClickOptionSelect}
            initialValue={Number(profile?.profile.template)}
          />

          <label className={cnStyles("form-name")} htmlFor="thesis">
            Девиз, цитата
          </label>
          <InputTextarea
            name={"thesis-info"}
            // value={form["thesis-info"] || ""}
            value={String(profile?.profile.quote)}
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
              // value={form["hobby-info"] || ""}
              value={String(profile?.info.hobby.text)}
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
              // value={form["family-info"] || ""}
              value={String(profile?.info.status.text)}
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
            // value={form["job-info"] || ""}
            value={String(profile?.info.job.text)}
            onChange={onChange}
            placeholder={"Не более 300 символов"}
            maxLength={300}
          />

          <label className={cnStyles("form-name")} htmlFor="why">
            Почему решил учиться на веб-разработчика?
          </label>
          <InputTextarea
            name={"why-info"}
            // value={form["why-info"] || ""}
            value={String(profile?.info.edu.text)}
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
