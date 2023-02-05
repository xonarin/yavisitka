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
import { getAuthUser } from "../../utils/cookie";

const style = [
  { id: 1, name: "Серьезный" },
  { id: 2, name: "Романтичный" },
  { id: 3, name: "Дерзкий" },
];

const cnStyles = block("ProfileChangePage");

export const ProfilePage = () => {
  const [profile, setProfile] = useState<TProfileId>({
    _id: '',
    createdAt: 0,
    updatedAt: null,
    email: '',
    cohort: '',
    profile: {
      name: '',
      photo: '',
      city: {
        name: '',
        geocode: []
      },
      birthday: '',
      quote: '',
      telegram: '',
      github: '',
      template: null,
    },
    info: {
      hobby: {
        text: '',
        image: '',
        reactions: 0,
      },
      status: {
        text: '',
        image: '',
        reactions: 0,
      },
      job: {
        text: '',
        image: '',
        reactions: 0,
      },
      edu: {
        text: '',
        image: '',
        reactions: 0,
      },
    },
    reactions: 0,
  });

  // const id = '2cb3baaa7528a9bb5e2c20d9';
  const [{ _id, name, cohort, photo, email, role }, setUserData] = useState(
    getAuthUser()
  );

  useEffect(() => {
    getProfilesId(_id)
      .then((res) => {
        if (res) {
          setProfile(res);
        }
      })
      .catch((err) => {
        console.error(err);
      })
  }, []);

  const onChangeAvatar = (photo: any) => {
    setProfile({
      ...profile,
      profile: {
        ...profile.profile,
        photo: photo.target.value
      }
    });
  }

  const onChangeProfile = (e: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>) => {
    setProfile({
      ...profile,
      profile: {
        ...profile.profile,
        [e.target.name]: e.target.value
      }
    });
  }

  const onChangeInfo = (e: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>) => {
    setProfile({
      ...profile,
      info: {
        ...profile.info,
        [e.target.name]: e.target.value
      }
    });
  }

  const onChangeDatePicker = (date: string) => {
    setProfile({
      ...profile,
      profile: {
        ...profile.profile,
        birthday: date
      }
    });
  };

  const handleClickOptionSelect = (value: string) => {
    setProfile({
      ...profile,
      profile: {
        ...profile.profile,
        city: {
          ...profile.profile.city,
          name: value,
        }
      }
    });
  };

  const handleClickTemplate = (value: string | null) => {
    setProfile({
      ...profile,
      profile: {
        ...profile.profile,
        template: value
      }
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateProfile(profile)
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
          <InputAvatar onChange={onChangeAvatar} />

          <label className={cnStyles("form-name")} htmlFor="birthday">
            Дата рождения *
          </label>
          <div className={cnStyles("input-date")}>
            <InputDate onChangeDatePicker={onChangeDatePicker} />
          </div>

          <label className={cnStyles("form-name")} htmlFor="place">
            Выберите город *
          </label>
          <YMaps
            query={{
              load: "package.full",
              apikey: "6bbb9fad-fe92-4de7-aed3-2caa0584dade",
            }}
          >
            <InputSuggestView onClick={handleClickOptionSelect} initialValue={profile?.profile.city.name && String(profile?.profile.city.name)} />
          </YMaps>

          <label className={cnStyles("form-name")} htmlFor="telegram">
            Ник в телеграм
          </label>
          <InputText
            name={"telegram"}
            value={String(profile?.profile.telegram)}
            onChange={onChangeProfile}
          />

          <label className={cnStyles("form-name")} htmlFor="github">
            Ник на гитхабе
          </label>
          <InputText
            name={"github"}
            value={String(profile?.profile.github)}
            onChange={onChangeProfile}
          />

          <label className={cnStyles("form-name")} htmlFor="stile">
            Выберите шаблон
          </label>

          <InputSelectFile
            defaultText={""}
            optionsList={style}
            name={"style"}
            handleClickOptionSelect={handleClickTemplate}
            initialValue={Number(profile?.profile.template)}
          />

          <label className={cnStyles("form-name")} htmlFor="thesis">
            Девиз, цитата
          </label>
          <InputTextarea
            name={"quote"}
            value={String(profile?.profile.quote)}
            onChange={onChangeProfile}
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
              name={"hobby"}
              value={String(profile?.info.hobby.text)}
              onChange={onChangeInfo}
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
              name={"status"}
              // value={form["family-info"] || ""}
              value={String(profile?.info.status.text)}
              onChange={onChangeInfo}
              placeholder={"Не более 300 символов"}
              maxLength={300}
            />
          </div>

          <label className={cnStyles("form-name")} htmlFor="job">
            Из какой сферы пришел? Кем работаешь?
          </label>
          <InputTextarea
            name={"job"}
            value={String(profile?.info.job.text)}
            onChange={onChangeInfo}
            placeholder={"Не более 300 символов"}
            maxLength={300}
          />

          <label className={cnStyles("form-name")} htmlFor="why">
            Почему решил учиться на веб-разработчика?
          </label>
          <InputTextarea
            name={"edu"}
            value={String(profile?.info.edu.text)}
            onChange={onChangeInfo}
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
