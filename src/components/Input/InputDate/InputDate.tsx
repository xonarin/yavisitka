import { FC, useState } from "react";
import { block } from "bem-cn";
import DatePicker, { registerLocale } from "react-datepicker";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getMonth";
import addDays from "date-fns/addDays";
import range from "lodash/range";
import ru from "date-fns/locale/ru";
import "react-datepicker/dist/react-datepicker.css";
import "./InputDate.scss";

const cnStyles = block("react-datepicker");

interface InputDateProps {
  onChangeDatePicker: (date: string) => void;
}

const InputDate: FC<InputDateProps> = ({ onChangeDatePicker }) => {
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
    <div className={cnStyles("wrap")}>
      <DatePicker
        locale={ru}
        name="date"
        maxDate={addDays(new Date(), 0)}
        dateFormat="d.M.yyyy"
        popperClassName="react-datepicker__popper-custom"
        renderCustomHeader={({ date, changeYear, changeMonth }) => (
          <div className={cnStyles("wrap-select")}>
            <select
              className={cnStyles("custom-select")}
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
              className={cnStyles("custom-select")}
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
        onChange={(date) => {
          if (date) {
            setStartDate(date);
            onChangeDatePicker(String(date));
          }
        }}
      />
    </div>
  );
};

export default InputDate;
