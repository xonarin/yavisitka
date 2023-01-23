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

const HomePage = () => {
    const [cards, setCards] = useState<TCards>({total: 0, items: []});
    const [isLoading, setIsLoading] = useState(false);
    const [city, setCity] = useState<string | null>('Все города');

    const cities: string[] = [];
    cards?.items?.forEach((item) => {
        cities.push(item.profile.city.name)
    })

    const filteredCards = cards.items?.filter((item) => {
        if (city === 'Все города') {
            return item;
        }
        return item.profile.city.name === city
    })

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
    }, [city]);

    function handleScroll() {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    }

    function handleCity(city: string | null) {
        setCity(city);
    }

    return (
        <main className={cnStyles()}>
            <div className={cnStyles('optionsContainer')}>
                <DropdownMenu defaultText={'Все города'} optionsList={cities} handleCity={handleCity}/>
                <Link to={'/map'} className={cnStyles('mapLink')}>Посмотреть на карте</Link>
            </div>
            <div className={cnStyles('cardContainer')}>{filteredCards.map((card) => {
                return <ClassmateCard key={card._id} cardsData={card}/>;
            })}</div>
            {isLoading && <LoadingSpinner/>}
        </main>
    )
}

export default HomePage;