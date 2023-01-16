import React, { useState, useEffect } from 'react';
import { baseApiUrl, checkResponse } from '../../utils/api';
import { getCookie } from '../../utils/cookie';
import { cn } from "../../utils/bem-css-module";
import styles from './MapsPage.module.scss';
import { profilesGet } from '../../utils/api-test-data';
const cnStyles = cn(styles, 'Map');
import CustomMap from '../../components/CustomMap/CustomMap';

const MapsPage = () => {
    
    return (
        <CustomMap />
    )
}

export default MapsPage;