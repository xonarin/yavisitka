import React from "react";
import Logo from '../../components/Logo/Logo';
import LinkEntry from "../../components/LinkEntry/LinkEntry";
import { YMaps } from "@pbe/react-yandex-maps";
import InputSuggestView from "../../components/Input/InputSuggestView/InputSuggestView";
import InputDate from "../../components/Input/InputDate/InputDate";


const Demo = () => {
    return (
        <>
        <YMaps query={{ load: "package.full", apikey: "6bbb9fad-fe92-4de7-aed3-2caa0584dade" }}>
            <InputSuggestView />
            {/* <CustomMap coord={profilesGet} center={[55.76, 37.64]} zoom={7}/> */}
        </YMaps>
        <InputDate />
        
        </>
    )
}

export default Demo;