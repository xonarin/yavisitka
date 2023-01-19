import React, { useEffect } from "react";
import { useYMaps,  } from "@pbe/react-yandex-maps";


const InputSuggestView = () => {
    const ymaps = useYMaps(['Map']);

    useEffect(() => {
        if (!ymaps) return;
        var input = document.getElementById('suggest');
        //@ts-ignore
        var suggestView = new ymaps.SuggestView('suggest', {
            offset: [10, 10]
        });
    }, [ymaps])

    return (
        <input type="text" id="suggest"/>
    )
}

export default InputSuggestView;