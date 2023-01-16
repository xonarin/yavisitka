import React, { FC, useRef, useEffect } from 'react';
import { useYMaps,  } from "@pbe/react-yandex-maps";
import  Balloon  from '../../components/BalloonLayout/BalloonLayout';
import { cn } from "../../utils/bem-css-module";
import hint from '../../assets/images/hint.png';
import styles from './CustomMap.module.scss';

export interface CustomMapProps {
    coord: TotalItems,
    center: number[],
    zoom: number
}

export interface TotalItems {
    total: number;
    items: Item[];
}

export interface Item {
    _id:       string;
    createdAt: number;
    updatedAt: null;
    email:     string;
    cohort:    string;
    profile:   Profile;
}

export interface Profile {
    name:  string;
    photo: string;
    city:  City;
}

export interface City {
    name:    string;
    geocode: string[];
}

const cnStyles = cn(styles, 'Map');

const CustomMap: FC<CustomMapProps> = ({ coord, center, zoom }) => {
    const mapRef = useRef(null);
    const ymaps = useYMaps(['Map']);

    useEffect(() => {
        if (!ymaps || !mapRef.current) return;

        const profiles = coord.items.map((item) => {
            return item.profile;
        })

      
      const LayoutClass = ymaps.templateLayoutFactory.createClass(Balloon());
      const map = new ymaps.Map(mapRef.current, {
        center: center,
        zoom: zoom,
      });

      profiles.map((item) => new ymaps.Placemark(item.city.geocode, {
        hintContent: 'Открой меня, если я закрыт',
        balloonContentHeader: item.photo,
        balloonContentBody: item.name,
        balloonContentFooter: item.city.name,
    }, {
        hideIconOnBalloonOpen: false,
        iconLayout: 'default#image',
        iconImageHref: hint,
        iconImageSize: [60, 68],
        iconImageOffset: [-60, 0],
        balloonLayout: LayoutClass,
        balloonPanelMaxMapArea: 0
      }))
        .forEach(place => {
            map.geoObjects.add(place)
            place.balloon.open();
        })

    }, [ymaps]);

    return (
            <div ref={mapRef} className={cnStyles()} />
        )
  };

  export default CustomMap