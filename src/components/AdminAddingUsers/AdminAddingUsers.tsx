import { block } from 'bem-cn'; 
import { TUser, TUsersDataSet } from "../../utils/types";
import { v4 as uuidv4 } from "uuid";
import "./AdminAddingUsers.scss";

const cnStyles = block("AddingUsers");

type TAdminAddingUsers = {
  currentUsers: TUser[];
  setUsers: React.Dispatch<React.SetStateAction<TUsersDataSet>>;
};

export const AdminAddingUsers = ({
  setUsers,
  currentUsers,
}: TAdminAddingUsers) => {
  const handleOnChange = async (evt: React.ChangeEvent<HTMLInputElement>) => {
    const file = evt.target.files ? evt.target.files[0] : undefined;
    const reader = new FileReader();
    const resArr: TUser[] = [];

    const defaultData = {
      _id: "",
      createdAt: 0,
      updatedAt: null,
      email: "",
      cohort: "",
      name: "",
    };

    if (file) {
      if (file.name.endsWith(".csv")) {
        reader.readAsText(file, "WINDOWS-1251");

        reader.onload = function () {
          const preArr = String(reader.result)
            .replace(/ /gm, "~")
            .replace(/\s/gm, ";")
            .replace(/;;/g, ";")
            .replace(/;/g, " ")
            .trim()
            .split(" ");

          for (let i = 0; i < preArr.length; i += 2) {
            resArr.push({
              ...defaultData,
              email: preArr[i + 1],
              cohort: preArr[i],
              _id: uuidv4(),
            });
          }
          const fullData = currentUsers.concat(resArr);
          setUsers({
            usersTotal: 0,
            users: fullData,
          });
        };

        reader.onerror = function () {
          console.log(reader.error);
        };
      }

      if (file.name.endsWith(".xlsx")) {
        let XLSX = require("xlsx");
        let data = await file.arrayBuffer();
        const workbook = XLSX.readFile(data);
        const sheet = workbook.Sheets[workbook.Workbook.Sheets[0].name];
        const maxRow = +sheet["!ref"].match(/\d+$/)[0];

        for (let i = 1; i <= maxRow; i++) {
          resArr.push({
            ...defaultData,
            email: sheet[`B${i}`].v,
            cohort: sheet[`A${i}`].v,
            _id: uuidv4(),
          });
        }

        const fullData = currentUsers.concat(resArr);
        setUsers({
          usersTotal: 0,
          users: fullData,
        });
      }
    }
  };

  return (
    <div className={cnStyles()}>
      <p className={cnStyles("title")}>Добавить студентов</p>

      <p className={cnStyles("text")}>
        Чтобы добавить новых студентов, загрузите csv или xlsx файл: первая
        колонка должна содержать email студентов, вторая колонка — номер
        когорты.
      </p>

      <label htmlFor="myFile">
        <div className={cnStyles("button")}>
          <p className={cnStyles("button-text")}>Выберите файл</p>
        </div>
        <input
          type="file"
          className={cnStyles("input")}
          name="myFile"
          id="myFile"
          accept=".csv, .xlsx"
          onChange={handleOnChange}
        />
      </label>
    </div>
  );
};
