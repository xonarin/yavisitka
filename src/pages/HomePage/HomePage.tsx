import React from "react";
import styles from './HomePage.module.scss';
import {cn} from "../../utils/bem-css-module";
import {Link} from "react-router-dom";
import ClassmateCard from "../../components/ClassmateCard/ClassmateCard";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const cnStyles = cn(styles, 'HomePage');

const HomePage = () => {
    return (
        <main className={cnStyles()}>
            <div className={cnStyles('optionsContainer')}>
                <div>Заглушка</div>
                {/* здесь будет компонент с выбором и сортировкой городов */}
                <Link to={'/map'} className={cnStyles('mapLink')}>Посмотреть на карте</Link>
            </div>
            <div className={cnStyles('cardContainer')}>
                {/* здесь будет отрисовываться массив карточек */}
                <ClassmateCard/>
                <ClassmateCard/>
                <ClassmateCard/>
                <ClassmateCard/>
                <ClassmateCard/>
                <ClassmateCard/>
                <ClassmateCard/>
                <ClassmateCard/>
            </div>
            <LoadingSpinner/>
        </main>
    )
}

export default HomePage;