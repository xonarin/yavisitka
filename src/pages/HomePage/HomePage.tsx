import React, {useState, useEffect} from "react";
import axios from "axios";
import styles from './HomePage.module.scss';
import {cn} from "../../utils/bem-css-module";
import {Link} from "react-router-dom";
import ClassmateCard from "../../components/ClassmateCard/ClassmateCard";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const cnStyles = cn(styles, 'HomePage');

const HomePage = () => {
    const [cards, setCards] = useState({data: [], page: 1});
    const [isLoading, setIsLoading] = useState(false);
    const portion = 12;
    const totalPages = Math.ceil(100 / portion);
console.log(isLoading);
    //функция запроса карточек
    const getNewCards = () => {
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
                // Optional code to simulate delay
                setTimeout(() => {
                    setCards({data: [...cards.data, ...data], page: cards.page + 1});
                    setIsLoading(false);
                }, 1000);

            })

    };

    //загрузка самой первой порции данных
    useEffect(() => {
        getNewCards();
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    function handleScroll() {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        setIsLoading(true);
    }

    useEffect(() => {
        if (!isLoading) return;
        fetchMoreCards();
    }, [isLoading]);

    function fetchMoreCards() {
        if (cards.page < totalPages) {
            getNewCards();
        }
        setIsLoading(false);
    }

    const cardsArray = cards.data.map((item) => {
        // @ts-ignore
        return <ClassmateCard key={item.id} info={item}/>;
    })

    return (
        <main className={cnStyles()}>
            <div className={cnStyles('optionsContainer')}>
                <div>Заглушка</div>
                {/* здесь будет компонент с выбором и сортировкой городов */}
                <Link to={'/map'} className={cnStyles('mapLink')}>Посмотреть на карте</Link>
            </div>
            <div className={cnStyles('cardContainer')}>{cardsArray}</div>
            {!isLoading && <LoadingSpinner/>}
        </main>
    )
}

export default HomePage;