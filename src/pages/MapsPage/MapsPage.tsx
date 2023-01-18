import React, { useRef, useEffect } from 'react';
import CustomMap from '../../components/CustomMap/CustomMap';
import { YMaps } from "@pbe/react-yandex-maps";
import { profilesGet } from '../../utils/api-test-data';

const MapsPage = () => {
    return (
        <YMaps query={{ load: "package.full" }}>
            <CustomMap coord={profilesGet} center={[55.76, 37.64]} zoom={7}/>
        </YMaps>
    )
}

export default MapsPage;
export default MapsPage;