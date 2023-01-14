import React, {useState, useEffect} from "react";
import styles from './DropdownCitiesHomePage.module.scss';
import {cn} from "../../utils/bem-css-module";

const cnStyles = cn(styles, 'HomePage');

const DropdownMenu = () => {
    return (
        <div>
            <select>
                <option>123</option>
                <option>234</option>
                <option>123</option>
                <option>123</option>
                <option>123</option>
            </select>
        </div>
    )
}

export default DropdownMenu;