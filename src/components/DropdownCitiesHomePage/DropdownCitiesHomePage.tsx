import { useState, useEffect, useRef, FC } from "react";
import { block } from "bem-cn";
import "./DropdownCitiesHomePage.scss";

const cnStyles = block("DropdownMenu");

type TProps = {
  defaultText: string | null;
  optionsList: string[];
  handleCity: (city: string | null) => void;
};

type TState = {
  selectText: string | null;
  showOptionList: boolean;
};

const DropdownMenu: FC<TProps> = ({ defaultText, optionsList, handleCity }) => {
  const [menuState, setMenuState] = useState<TState>({
    selectText: "",
    showOptionList: false,
  });
  const { showOptionList, selectText } = menuState;
  const ref = useRef<HTMLDivElement>(null);
  const citiesCollection = new Set(optionsList);
  const filteredCities = Array.from(citiesCollection).sort((a, b) => {
    return a < b ? -1 : a > b ? 1 : 0;
  });
  filteredCities.unshift("Все города");

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    setMenuState({
      ...menuState,
      selectText: defaultText,
    });
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  // TODO
  function handleClickOutside(e: any) {
    if (ref.current && !ref.current.contains(e.target)) {
      setMenuState((prevState) => {
        return {
          ...prevState,
          showOptionList: false,
        };
      });
    }
  }

  function handleListDisplay() {
    setMenuState((prevState) => {
      return {
        ...prevState,
        showOptionList: !prevState.showOptionList,
      };
    });
  }

  function handleOptionClick(e: React.MouseEvent<HTMLLIElement>) {
    if (!(e.target instanceof HTMLElement)) return;
    setMenuState({
      ...menuState,

      selectText: (e.target as HTMLElement).textContent,
      showOptionList: false,
    });
    handleCity((e.target as HTMLElement).textContent);
  }

  return (
    <div className={cnStyles()} ref={ref}>
      <div
        className={showOptionList ? cnStyles("open") : cnStyles("selectHome")}
        onClick={handleListDisplay}
      >
        <p className={cnStyles("text")}>{selectText}</p>
      </div>
      {showOptionList && (
        <ul className={cnStyles("select-options")}>
          {filteredCities.map((option, index) => {
            return (
              <li
                className={cnStyles("custom-select-option")}
                key={index}
                onClick={handleOptionClick}
              >
                {option}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
