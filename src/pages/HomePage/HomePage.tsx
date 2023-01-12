import React from "react";
import styles from './HomePage.module.scss';
import {cn} from "../../utils/bem-css-module";
import {Link} from "react-router-dom";

const cnStyles = cn(styles, 'HomePage');

const HomePage = () => {
    return (
        <div className={cnStyles()}>
            <div className={cnStyles('optionsContainer')}>
                <div>Заглушка</div>
                {/* здесь будет компонент с выбором и сортировкой городов */}
                <Link to={'/map'} className={cnStyles('mapLink')}>Посмотреть на карте</Link>
            </div>
            <div className={cnStyles('cardContainer')}>
                {/* здесь будет отрисовываться массив карточек */}
                <div>ffffffff</div>
                <div>ffffffff</div>
                <div>ffffffff</div>
                <div>ffffffff</div>
                <div>ffffffff</div>
                <div>ffffffff</div>
                <div>ffffffff</div>
                <div>ffffffff</div>
                <div>ffffffff</div>
                <div>ffffffff</div>
                <div>ffffffff</div>
                <div>ffffffff</div>
            </div>
        </div>
    )
}

export default HomePage;