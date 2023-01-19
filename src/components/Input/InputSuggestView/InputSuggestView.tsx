import React, { useEffect } from "react";
import { useYMaps,  } from "@pbe/react-yandex-maps";
import { cn } from "../../../utils/bem-css-module";
import styles from './InputSuggestView.module.scss';

const cnStyles = cn(styles, 'InputSuggest');


const InputSuggestView = () => {
    const ymaps = useYMaps(['Map']);

    useEffect(() => {
        if (!ymaps) return;
        var input = document.getElementById('suggest');
        var layout = ymaps.templateLayoutFactory.createClass([
            "{% for item in state.items %}",
            "<li data-value=\"{{ item.value }}\">{{ item.displayName }}</li>",
            "{% endfor %}"
        ].join(''));


        //@ts-ignore
        var suggestView = new ymaps.SuggestView('suggest', {
            container: document.querySelector('#podskazka'),
            layout: layout
        });
    }, [ymaps])

    return (
        <div className={cnStyles()}>
            <input className={cnStyles('Input')} type="text" id="suggest"/>
            <ul className={cnStyles('List')} id="podskazka"></ul>
        </div>
    )
}

export default InputSuggestView;