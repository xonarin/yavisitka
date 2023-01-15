import React, {useState, useEffect} from "react";
import axios from "axios";
import styles from './HomePage.module.scss';
import {cn} from "../../utils/bem-css-module";
import {Link} from "react-router-dom";
import ClassmateCard from "../../components/ClassmateCard/ClassmateCard";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import DropdownMenu from "../../components/DropdownCitiesHomePage/DropdownCitiesHomePage";

const cnStyles = cn(styles, 'HomePage');
const cities = [
    { id: 1, name: "Москва" },
    { id: 2, name: "Санкт-Петербург" },
    { id: 3, name: "Самара" },
    { id: 4, name: "Казань" },
    { id: 5, name: "Пермь" },
    { id: 6, name: "Магнитогорск" },
    { id: 7, name: "Тюмень" },
    { id: 8, name: "Новосибирск" },
    { id: 9, name: "Тула" },
    { id: 10, name: "Рязань" }
]

const HomePage = () => {
    const [cards, setCards] = useState({data: [], page: 1});
    const [isLoading, setIsLoading] = useState(false);
    const portion = 12;
    const totalPages = Math.ceil(50 / portion);
    const cardsArray = cards.data.map((item) => {
        // @ts-ignore
        return <ClassmateCard key={item.id} info={item}/>;
    })

    useEffect(() => {
        getNewCards();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isLoading]);

    //функция запроса карточек
    const getNewCards = () => {
        if (cards.page < totalPages) {
            setIsLoading(true);
            axios
                .get("https://jsonplaceholder.typicode.com/photos", {
                    params: {
                        _limit: portion,
                        _page: cards.page,
                    },
                })
                .then(({data}) => {
                    //setCards({data: [...cards.data, ...data], page: cards.page + 1});
                    //setIsLoading(false);
                     //Optional code to simulate delay
                    setTimeout(() => {
                        setCards({data: [...cards.data, ...data], page: cards.page + 1});
                        setIsLoading(false);
                    }, 1000);

                })
        }
    };

    function handleScroll() {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    }

    return (
        <main className={cnStyles()}>
            <div className={cnStyles('optionsContainer')}>
                <DropdownMenu defaultText={'Все города'} optionsList={cities}/>
                <Link to={'/map'} className={cnStyles('mapLink')}>Посмотреть на карте</Link>
            </div>
            <div className={cnStyles('cardContainer')}>{cardsArray}</div>
            {isLoading && <LoadingSpinner/>}
        </main>
    )
}

export default HomePage;