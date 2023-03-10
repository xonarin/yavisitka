import { FC, useState } from "react";
import { useYMaps } from "@pbe/react-yandex-maps";
import { block } from "bem-cn";
import "./InputSuggestView.scss";

const cnStyles = block("InputSuggest");

interface InputSuggestViewProps {
  onChange: any;
}

const InputSuggestView: FC<InputSuggestViewProps> = ({ onChange }) => {
  const ymaps = useYMaps(["Map"]);
  const [view, setView] = useState<string[]>();
  const [viewLength, setviewLength] = useState<number>();
  const [sugval, setSugVal] = useState<string>("");
  const [status, setStatus] = useState<boolean>(false);

  const clicks = (e: any) => {
    suggestView(e.target.value);
    setSugVal(e.target.value);
    setStatus(true);
  };

  const suggestView = (info: string) => {
    ymaps?.suggest(info).then(function (items) {
      const newArray = items.map((element) => element.value);
      setView(newArray);
      setviewLength(newArray.length);
    });
  };

  const geoView = (info: string) => {
    ymaps?.geocode(info, { results: 1 }).then(function (res) {
      const firstGeoObject = res.geoObjects.get(0);
      // console.log(`Координаты где? Всё на месте: ${firstGeoObject?.geometry?._coordinates}`)
    });
  };

  const resultClick = (e: any) => {
    suggestView(e.target.innerText);
    geoView(e.target.innerText);
    setSugVal(e.target.innerText);
    setStatus(false);
  };

  return (
    ymaps && (
      <div className={cnStyles()}>
        <input
          className={cnStyles("Input")}
          type="text"
          name="suggest"
          id="suggest"
          onChange={(e) => {
            clicks(e);
            onChange(e);
          }}
          onClick={(e) => {
            clicks(e);
            onChange(e);
          }}
          value={sugval}
          autoComplete="off"
        />
        {status && sugval && (
          <ul
            className={cnStyles("List")}
            style={{ height: `calc(${viewLength}*36px)` }}
            id="podskazka"
          >
            {view?.map((element: string, key: number) => {
              return (
                <li key={key} onClick={(e) => resultClick(e)} tabIndex={0}>
                  {element}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    )
  );
};

export default InputSuggestView;
