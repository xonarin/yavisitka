import React, {useState, useEffect, FC} from "react";
import styles from './DropdownCitiesHomePage.module.scss';
import {cn} from "../../utils/bem-css-module";

const cnStyles = cn(styles, 'DropdownMenu');
const arrowDown = require('../../images/homepage-arrow-down.svg');
const arrowUp = require('../../images/homepage-arrow-up.svg');

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
    console.log(menuState.selectText)

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        setMenuState({
            ...menuState,
            selectText: props.defaultText,
        });
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // This method handles the click that happens outside the
    // select text and list area
    function handleClickOutside(e) {
        if (
            !e.target.classList.contains("custom-select-option") &&
            !e.target.classList.contains("select")
        ) {
            setMenuState({
                ...menuState,
                showOptionList: false
            });
        }
    }

    // This method handles the display of option list
    function handleListDisplay() {
        setMenuState({
            ...menuState,
            showOptionList: !menuState.showOptionList
        })
    }

    // This method handles the setting of name in select text area
    // and list display on selection
    function handleOptionClick(e) {
        if (!(e.target instanceof HTMLElement)) return;
        setMenuState({
            ...menuState,
            selectText: (e.target as HTMLElement).textContent,
            showOptionList: false
        });
    }


    return (
        <div className={cnStyles()}>
            <div
                className={cnStyles('select')}
                onClick={handleListDisplay}
            >
                <p className={cnStyles('text')}>{selectText}</p>
                <img className={cnStyles('arrow')} src={showOptionList ? arrowUp : arrowDown} alt="arrow"/>
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