import React, { useState } from "react";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getMonth";
import addDays from "date-fns/addDays";
import range from "lodash/range";
import ru from "date-fns/locale/ru";
import "../InputDate/InputDate.scss";

const InputDate = () => {
  registerLocale("ru", ru);
  const [startDate, setStartDate] = useState(new Date());
  const years = range(1900, getYear(new Date()) + 1, 1);

  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  return (
    <div className="react-datepicker__wrap">
      <DatePicker
        locale={ru}
        maxDate={addDays(new Date(), 0)}
        dateFormat="d.M.yyyy"
        popperClassName="react-datepicker-popper-custom"
        renderCustomHeader={({ date, changeYear, changeMonth }) => (
          <div className="react-datepicker__wrap-select">
            <select
              className="react-datepicker__custom-select"
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(Number(value))}
            >
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select
              className="react-datepicker__custom-select"
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        )}
        selected={startDate}
        onChange={(date) => (date ? setStartDate(date) : undefined)}
      />
    </div>
  );
};

export default InputDate;
