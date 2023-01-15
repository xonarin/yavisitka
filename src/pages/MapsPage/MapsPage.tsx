import React, { useState, useEffect } from 'react';
import { 
    YMaps, Map, ObjectManager, SearchControl, TrafficControl, 
    TypeSelector, ZoomControl, GeolocationControl, RulerControl 
} from '@pbe/react-yandex-maps';
import { baseApiUrl, checkResponse } from '../../utils/api';
import { getCookie } from '../../utils/cookie';
import { cn } from "../../utils/bem-css-module";
import styles from './MapsPage.module.scss';
import { profilesGet } from '../../utils/api-test-data';
const cnStyles = cn(styles, 'Map');

const MapsPage = () => {
    
      useEffect(() => {
          const getProfiles = async () => {
            try {
              const res = await fetch('profiles', {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            })
    
            const data = await checkResponse(res)
            console.log(res)

            } catch (error) {
              console.log(`Ошибка: ${error}`);
            }
          };
    
          getProfiles();
    
      })


    const collection = {
        type: "FeatureCollection",
        features: profilesGet.items.map((point, id) => {
          return {
            id: id,
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: point.profile.city.geocode
            },
            properties: {
              balloonContent: `
              <div>${point.profile.city.name}</div>
            `,
              clusterCaption: `Метка №${id + 1}`
            }
          };
        })
      };

    return (
        <div>
            <YMaps>
            <Map className={cnStyles()}
                state={{
                    center: [55.751574, 37.573856],
                    zoom: 4,
                }}
            >
            <SearchControl options={{ float: "left"}} />

            <TrafficControl  />
            <RulerControl options={{ 
                position: {
                    top: 0,
                }
             }} />
            <TypeSelector 

            />
            <ZoomControl options={{ 
                size: "small",
                position: {
                    top: 200,
                    right: 10,
                }
             }} />
            <GeolocationControl options={{ 
                position: {
                    top: 280,
                    right: 10,
                }
             }} />

            <ObjectManager
                objects={{
                    openBalloonOnClick: true
                }}
                clusters={{}}
                    options={{
                    clusterize: true,
                    gridSize: 32
                }}
                defaultFeatures={collection}
                modules={[
                    "objectManager.addon.objectsBalloon",
                    "objectManager.addon.clustersBalloon"
                ]}
            />
          </Map>
        </YMaps>
        </div>
    )
}

export default MapsPage;