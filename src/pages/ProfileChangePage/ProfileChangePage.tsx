import React from "react";
import { cn } from "../../utils/bem-css-module";
import styles from './ProfileChangePage.module.scss';
import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";
import Footer from "../../components/Footer/Footer";
// import DatePicker from "react-datepicker";
// import moment from "moment";
import ReactDOM from "react-dom";
import { any } from "prop-types";
// import 'react-datepicker/dist/react-datepicker.css'; 

const cnStyles = cn(styles, 'ProfileChangePage');

export const ProfilePage = () => {
  return (
    <main className={cnStyles("profile")}>
      <Container>
        <form action="#" className={cnStyles("form")} name="#">
          <label className={cnStyles("add-photo")} htmlFor="avatar">
            <div className={cnStyles("add-photo__title")}>
              Загрузите фото *
            </div>
            <div className={cnStyles("add-photo__subtitle")}>
              (размер не менее 440х440 пикселей)
            </div>
          </label>
          <div className={cnStyles("add-photo__input")}>
            <input type="file" className={cnStyles("photo")} name="avatar" id="avatar" accept="image/*" multiple required />
            <img className={cnStyles("avatar")} src="/assets/images/test.jpg" />
          </div>
          <label className={cnStyles("form-name")} htmlFor="birthday">Дата рождения *</label>
          <div className={cnStyles("form-input")}>
            <input type="date" className={cnStyles("date")} name="#" id="birthday" required />
          </div>
          <label className={cnStyles("form-name")} htmlFor="place">Выберете город *</label>
          <div className={cnStyles("form-input")}>
            <select className={cnStyles("select")} id="place" name="place" required>
              <option className={cnStyles('option')}>Москва</option>
              <option className={cnStyles('option')}>Таганрог</option>
            </select>
          </div>
          <label className={cnStyles("form-name")} htmlFor="telegram">Ник в телеграм</label>
          <div className={cnStyles("form-input")}>
            <input type="text" className={cnStyles("input-text")} name="#" id="telegram" />
          </div>
          <label className={cnStyles("form-name")} htmlFor="github">Ник на гитхабе</label>
          <div className={cnStyles("form-input")}>
            <input type="text" className={cnStyles("input-text")} name="#" id="github" />
          </div>
          <label className={cnStyles("form-name")} htmlFor="stile">Выберете шаблон</label>
          <div className={cnStyles("form-input")}>
            <select className={cnStyles("select")} id="stile" name="stile">
              <option className={cnStyles('option')}>серьезный</option>
              <option className={cnStyles('option')}>романтичный</option>
              <option className={cnStyles('option')}>дерзкий</option>
            </select>
          </div>
          <label className={cnStyles("form-name")} htmlFor="thesis">Девиз, цитата</label>
          <div className={cnStyles("form-input")}>
            <textarea placeholder="Не более 100 символов" className={cnStyles("textarea")} name="#"
              id="thesis"></textarea>
          </div>
          <label className={cnStyles("form-name")} htmlFor="hobbies">Увлечение, досуг, интересы</label>
          <div className={cnStyles("form-input")}>
            <div className={cnStyles("input-text")}>
              <input type="file" className={cnStyles("photo-text")} name="hobbies" id="hobbies" accept="image/*" multiple />
              <span className={cnStyles("add")}>

              </span>
            </div>
            <p className={cnStyles("alert")}>Рекомедуемый размер фото 230х129</p>
            <textarea placeholder="Не более 300 символов" className={cnStyles("textarea")} name="#"
              id="hobbies"></textarea>
          </div>
          <label className={cnStyles("form-name")} htmlFor="family">Семья, статус, домашние животные</label>
          <div className={cnStyles("form-input")}>
            <div className={cnStyles("input-text")}>
              <input type="file" className={cnStyles("photo-text")} name="family" id="family" accept="image/*" multiple />
              <span className={cnStyles("add")}>

              </span>
            </div>
            <p className={cnStyles("alert")}>Рекомедуемый размер фото 230х129</p>
            <textarea placeholder="Не более 300 символов" className={cnStyles("textarea")} name="#"
              id="family"></textarea>
          </div>
          <label className={cnStyles("form-name")} htmlFor="job">Из какой сферы пришел? Кем работаешь?</label>
          <div className={cnStyles("form-input")}>
            <textarea placeholder="Не более 300 символов" className={cnStyles("textarea")} name="#"
              id="job"></textarea>
          </div>
          <label className={cnStyles("form-name")} htmlFor="why">Почему решил учиться на веб-разработчика?</label>
          <div className={cnStyles("form-input")}>
            <textarea placeholder="Не более 300 символов" className={cnStyles("textarea")} name="#"
              id="why"></textarea>
          </div>
          <p className={cnStyles("span")}>Поля, отмеченный звездочкой, обязательные для заполнения</p>
          <input className={cnStyles("btn")} type="submit" value="Сохранить изменения" />
        </form>
      </Container>
    </main>
  )
}