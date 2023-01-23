import React, { ChangeEvent, MouseEventHandler, useEffect, useState } from "react";
import { useYMaps,  } from "@pbe/react-yandex-maps";
import { cn } from "../../../utils/bem-css-module";
import styles from './InputSuggestView.module.scss';
import { useHref } from "react-router-dom";

const cnStyles = cn(styles, 'InputSuggest');

const InputSuggestView = () => {
    const ymaps = useYMaps(['Map']);
    const [view, setView] = useState<string[]>();
    const [viewLength, setviewLength] = useState<number>();
    const [sugval, setSugVal] = useState<string>('');
    const [status, setStatus] = useState<boolean>(false);

    const clicks = (event: any) => {
        suggestView(event.target.value)
        setSugVal(event.target.value)
        setStatus(true)
    }

    const suggestView = (info: string) => {
        ymaps?.suggest(info)
            .then(function(items) {
                const newArray= items.map(element => element.value);
                setView(newArray);
                setviewLength(newArray.length);
            })
    }

    const geoView = (info: string) => {
        ymaps?.geocode(info, {results: 1})
            .then( function (res) {
                // Выбираем первый результат геокодирования.
                const firstGeoObject = res.geoObjects.get(0)
                //@ts-ignore
                console.log(`Координаты где? Всё на месте: ${firstGeoObject?.geometry?._coordinates}`)
        })
    }

    const resultClick = (event: any) => {
        suggestView(event.target.innerText)
        geoView(event.target.innerText)
        setSugVal(event.target.innerText )
        setStatus(false)
    }

    return ymaps && (
        <div className={cnStyles()}>
            <input className={cnStyles('Input')} type="text" id="suggest" onChange={(event) => clicks(event)} onClick={(event) => clicks(event)} value={sugval} autoComplete="off"/>
            {status && sugval && 
                <ul className={cnStyles('List')} style={{height: `calc(${viewLength}*36px)`}} id="podskazka">
                    {
                        view?.map((element: string, key: number) => {
                            return <li key={key} onClick={(event) => resultClick(event)} tabIndex={0}>{element}</li>
                        })
                    }
                </ul>
            }

            
        </div>
    )
}

export default InputSuggestView;