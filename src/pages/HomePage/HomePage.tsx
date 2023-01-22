import React, {useState, useEffect} from "react";
import styles from './HomePage.module.scss';
import {cn} from "../../utils/bem-css-module";
import {Link} from "react-router-dom";
import ClassmateCard from "../../components/ClassmateCard/ClassmateCard";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import DropdownMenu from "../../components/DropdownCitiesHomePage/DropdownCitiesHomePage";
import {getProfiles} from "../../utils/api";
import {TCards} from "../../utils/types";

const cnStyles = cn(styles, 'HomePage');
const cities = [
    {id: 1, name: "Москва"},
    {id: 2, name: "Санкт-Петербург"},
    {id: 3, name: "Самара"},
    {id: 4, name: "Казань"},
    {id: 5, name: "Пермь"},
    {id: 6, name: "Магнитогорск"},
    {id: 7, name: "Тюмень"},
    {id: 8, name: "Новосибирск"},
    {id: 9, name: "Тула"},
    {id: 10, name: "Рязань"}
]

const HomePage = () => {
    const [cards, setCards] = useState<TCards>({total: 0, items: []});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        getProfiles()
            .then((res) => {
                if (res) {
                    setCards({...cards, total: res.total, items: res.items})
                }
            })
            .catch((err) => {
                console.error(err)
            })
            .finally(() => {
                setIsLoading(false)
            });
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    function handleScroll() {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    }

    return (
        <main className={cnStyles()}>
            <div className={cnStyles('optionsContainer')}>
                <DropdownMenu defaultText={'Все города'} optionsList={cities}/>
                <Link to={'/map'} className={cnStyles('mapLink')}>Посмотреть на карте</Link>
            </div>
            <div className={cnStyles('cardContainer')}>{cards.items.map((card) => {
                return <ClassmateCard key={card._id} cardsData={card}/>;
            })}</div>
            {isLoading && <LoadingSpinner/>}
        </main>
    )
}

export default HomePage;