import React, {useState, useEffect, useRef, FC, MouseEvent} from "react";
import styles from './InputSelectFile.module.scss';
import {cn} from "../../../utils/bem-css-module";

const cnStyles = cn(styles, 'InputSelectFile');

type TProps = {
    defaultText: string | null,
    optionsList: {
        id: number,
        name: string,
    }[],
}

type TState = {
    selectText: string | null,
    showOptionList: boolean
}

const InputSelectFile: FC<TProps> = (props) => {
    const [menuState, setMenuState] = useState<TState>({selectText: '', showOptionList: false});
    const {showOptionList, selectText} = menuState;
    const ref = useRef<HTMLDivElement>(null);
    const optionsList = props.optionsList;

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        setMenuState({
            ...menuState,
            selectText: props.defaultText,
        });
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    function handleClickOutside(e: Event) {
        // @ts-ignore
        if (ref.current && !ref.current.contains(e.target)) {
            setMenuState(prevState => {
                return {
                    ...prevState,
                    showOptionList: false
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

    function handleOptionClick(e: MouseEvent) {
        if (!(e.target instanceof HTMLElement)) return;
        setMenuState({
            ...menuState,
            selectText: (e.target as HTMLElement).textContent,
            showOptionList: false
        });
    }

    return (
        <div className={cnStyles()} ref={ref}>
            <div
                className={showOptionList ? cnStyles('open') : cnStyles('select')}
                onClick={handleListDisplay}
            >
                <p className={cnStyles('text')}>{selectText}</p>
            </div>
            {showOptionList && (
                <ul className={cnStyles("select-options")}>
                    {optionsList.map( (option) => {
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