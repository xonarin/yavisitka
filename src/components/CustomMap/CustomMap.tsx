import React, { useRef, useEffect } from 'react';
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const CustomMap = () => {
    const center = [55.76, 37.64];
    const images = [...Array(26)].map((n, i) => {
        const letter = String.fromCharCode(i + 97);
        return `https://img.icons8.com/ios-filled/2x/marker-${letter}.png`;
      });
    return (
        <YMaps query={{ load: "package.full" }}>
            <Map
            state={{
                center,
                zoom: 9,
                controls: []
            }}
            width="100vw"
            height="100vh"
            >
            {images.map((n) => (
                <Placemark
                key={n}
                geometry={center.map((c) => c + (Math.random() - 0.5))}
                options={{
                    iconLayout: "default#image",
                    iconImageSize: [50, 50],
                    iconImageHref: "https://www.vladtime.ru/uploads/posts/2018-03/1522438548_evropeyskaya-koshka-dikiy-kot.jpg"
                }}
                />
            ))}
            </Map>
      </YMaps>
    )
  };

  export default CustomMap