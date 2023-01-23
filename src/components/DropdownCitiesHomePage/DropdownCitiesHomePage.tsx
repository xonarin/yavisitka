import React, {useState, useEffect, useRef, FC} from "react";
import styles from './DropdownCitiesHomePage.module.scss';
import {cn} from "../../utils/bem-css-module";

const cnStyles = cn(styles, 'DropdownMenu');
const arrowDown = require('../../assets/images/homepage-arrow-down.svg');
const arrowUp = require('../../assets/images/homepage-arrow-up.svg');

type TProps = {
    defaultText: string,
    optionsList: {
        id: number,
        name: string,
    }[]
}

const DropdownMenu: FC<TProps> = (props) => {
    const [menuState, setMenuState] = useState({selectText: '', showOptionList: false});
    const {showOptionList, selectText} = menuState;
    const optionsList = props.optionsList;
    const ref = useRef();

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        setMenuState({
            ...menuState,
            selectText: props.defaultText,
        });
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    function handleClickOutside(e) {
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

    function handleOptionClick(e) {
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
                    {optionsList.map(option => {
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

export default DropdownMenu;