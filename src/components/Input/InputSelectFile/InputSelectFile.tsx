import { useState, useEffect, useRef, FC, ChangeEvent } from "react";
import { block } from 'bem-cn';
import './InputSelectFile.scss';

const cnStyles = block('InputSelectFile');

type TProps = {
    defaultText: any,
    optionsList: {
        id: number,
        name: string,
    }[];
    name: string;
    handleClickOptionSelect: (value: string | null) => void;
}
const InputSelectFile: FC<TProps> = ({ defaultText, optionsList, name, handleClickOptionSelect }) => {
    const [menuState, setMenuState] = useState({ selectText: '', showOptionList: false });
    const { showOptionList, selectText } = menuState;
    const optionsListArr = optionsList;
    const ref = useRef();
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        setMenuState({
            ...menuState,
            selectText: defaultText,
        });
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    function handleClickOutside(e: { target: any; }) {
        // @ts-ignore
        if (ref.current && !ref.current.contains(e.target)) {
            setMenuState(prevState => {
                return {
                    ...prevState,
                    showOptionList: false,
                }
            });
        }
    }
    function handleListDisplay() {
        setMenuState(prevState => {
            return {
                ...prevState,
                showOptionList: !prevState.showOptionList
            }
        })
    }
    function handleOptionClick(e: { target: any; }) {
        if (!(e.target instanceof HTMLElement)) return;
        setMenuState({
            ...menuState,
            //@ts-ignore
            selectText: (e.target as HTMLElement).textContent,
            showOptionList: false
        });
        handleClickOptionSelect(e.target.textContent);
    }
    return (
        <div className={cnStyles()}>
            <div
                className={showOptionList ? cnStyles('open') : cnStyles('select')}
                onClick={handleListDisplay}
            >
                <p className={cnStyles('text')}>{selectText}</p>
            </div>
            {showOptionList && (
                <ul className={cnStyles("select-options")}>
                    {optionsListArr.map(option => {
                        return (
                            <li
                                className={cnStyles("custom-select-option")}
                                key={option.id}
                                onClick={handleOptionClick}
                            >
                                {option.name}
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    )
}
export default InputSelectFile;