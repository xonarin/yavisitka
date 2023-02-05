import React, { useState, useEffect } from "react";
import { block } from "bem-cn";
import { Link, Navigate, useLocation } from "react-router-dom";
import ClassmateCard from "../../components/ClassmateCard/ClassmateCard";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import DropdownMenu from "../../components/DropdownCitiesHomePage/DropdownCitiesHomePage";
import { getProfiles } from "../../utils/api";
import { TCards } from "../../utils/types";
import { getAuthUser, getCookie } from "../../utils/cookie";
import "./HomePage.scss";

const cnStyles = block("HomePage");

const HomePage = () => {
  const [{ cohort, role }, setUserData] = useState(getAuthUser());
  const { pathname } = useLocation();
  const [cards, setCards] = useState<TCards>({ total: 0, items: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [city, setCity] = useState<string | null>("Все города");

  const cities: string[] = [];
  cards?.items?.forEach((item) => {
    cities.push(item.profile.city.name);
  });

  const filteredCards = cards.items?.filter((item) => {
    if (city === "Все города") {
      return item;
    }
    return item.profile.city.name === city;
  });

  useEffect(() => {
    setIsLoading(true);
    getProfiles()
      .then((res) => {
        if (res) {
          if (role === "student") {
            setCards({
              ...cards,
              total: res.total,
              items: res.items.filter((val) => val.cohort === cohort),
            });
          } else {
            setCards({
              ...cards,
              total: res.total,
              items: res.items,
            });
          }
        }
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [city]);

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
  }

  function handleCity(city: string | null) {
    setCity(city);
  }

  if (getCookie("status") && !pathname.startsWith("/cohort/")) {
    return <Navigate to="/admin" />;
  }

  if (!getCookie("status") && pathname.startsWith("/cohort/")) {
    return <Navigate to="/" />;
  }

  return (
    <main className={cnStyles()}>
      <div className={cnStyles("optionsContainer")}>
        <DropdownMenu
          defaultText={"Все города"}
          optionsList={cities}
          handleCity={handleCity}
        />
        <Link
          to={!filteredCards.length ? "/" : "/map"}
          className={cnStyles("mapLink")}
        >
          Посмотреть на карте
        </Link>
      </div>
      <div className={cnStyles("cardContainer")}>
        {filteredCards.map((card) => {
          return <ClassmateCard key={card._id} cardsData={card} />;
        })}
      </div>
      {!filteredCards.length && !isLoading && (
        <p className={cnStyles("error-text")}>
          Вас еще не внесли в список зарегистрированных пользователей.
          Пожалуйста обратитесь к куратору вашей когорты.
        </p>
      )}
      {isLoading && <LoadingSpinner />}
    </main>
  );
};

export default HomePage;
