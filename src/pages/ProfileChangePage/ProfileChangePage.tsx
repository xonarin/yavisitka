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
import DropdownMenu from "../../components/DropdownCitiesHomePage/DropdownCitiesHomePage";

// картинки максимум 2мб, jpeg, gif, адаптив

const cities = [
  { id: 1, name: "Москва" },
  { id: 2, name: "Санкт-Петербург" },
  { id: 3, name: "Самара" },
  { id: 4, name: "Казань" },
  { id: 5, name: "Пермь" },
  { id: 6, name: "Магнитогорск" },
  { id: 7, name: "Тюмень" },
  { id: 8, name: "Новосибирск" },
  { id: 9, name: "Тула" },
  { id: 10, name: "Рязань" }
]

const style = [
  { id: 1, name: "Серьезный" },
  { id: 2, name: "Романтичный" },
  { id: 3, name: "Дерзкий" },
]

const cnStyles = cn(styles, 'ProfileChangePage');
const handleFileUpload = (e) => {
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
            <div className={cnStyles("add-photo__title")}>
              Загрузите фото *
            </div>
            <div className={cnStyles("add-photo__subtitle")}>
              (размер не менее 440х440)
            </div>
          </label>
          <div className={cnStyles("add-photo__input")}>
            <input 
            type="file" 
            className={cnStyles("photo")} 
            name="avatar" id="avatar" 
            accept=".jpg, .jpeg, .gif" 
            onChange={handleFileUpload}
            required />
            </div>
          <label className={cnStyles("form-name")} htmlFor="birthday">Дата рождения *</label>
          <div className={cnStyles("form-input")}>
            <input type="date" className={cnStyles("date")} name="#" id="birthday" required />
          </div>
          <label className={cnStyles("form-name")} htmlFor="place">Выберете город *</label>
          <div className={cnStyles("form-input")}>
          <DropdownMenu defaultText={'Все города'} optionsList={cities}/>
          </div>
          <label className={cnStyles("form-name")} htmlFor="telegram">Ник в телеграм</label>
          <div className={cnStyles("form-input")}>
            <input type="text" placeholder="@example" className={cnStyles("input-text")} name="#" id="telegram" />
          </div>
          <label className={cnStyles("form-name")} htmlFor="github">Ник на гитхабе</label>
          <div className={cnStyles("form-input")}>
            <input type="text" placeholder="@example" className={cnStyles("input-text")} name="#" id="github" />
          </div>
          <label className={cnStyles("form-name")} htmlFor="stile">Выберете шаблон</label>
          <div className={cnStyles("form-input")}>
          <DropdownMenu defaultText={'Стили'} optionsList={style}/>
          </div>
          <label className={cnStyles("form-name")} htmlFor="thesis">Девиз, цитата</label>
          <div className={cnStyles("form-input")}>
            <textarea placeholder="Не более 100 символов" className={cnStyles("textarea")} name="#"
              id="thesis"></textarea>
          </div>
          <label className={cnStyles("form-name")} htmlFor="hobbies">Увлечение, досуг, интересы</label>
          <div className={cnStyles("form-input")}>
            <div className={cnStyles("input-text")}>
              <input type="file" className={cnStyles("photo-text")} name="hobbies" id="hobbies" accept=".jpg, .jpeg, .gif" onChange={handleFileUpload} />
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
              <input type="file" className={cnStyles("photo-text")} name="family" id="family" accept=".jpg, .jpeg, .gif" onChange={handleFileUpload} />
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
    </section>
    </Container>
  )
}
