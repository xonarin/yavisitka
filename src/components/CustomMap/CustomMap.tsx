import { FC, useRef, useEffect } from "react";
import { useYMaps } from "@pbe/react-yandex-maps";
import Balloon from "../../components/BalloonLayout/BalloonLayout";
import { cn } from "../../utils/bem-css-module";
import hint from "../../assets/images/hint.png";
import styles from "./CustomMap.module.scss";
import { TCards } from "../../utils/types";

export interface CustomMapProps {
  coord: TCards;
  center: number[];
  zoom: number;
}

const cnStyles = cn(styles, "Map");

const CustomMap: FC<CustomMapProps> = ({ coord, center, zoom }) => {
  const mapRef = useRef(null);
  const ymaps = useYMaps(["Map"]);

  useEffect(() => {
    if (!ymaps || !mapRef.current) return;

    const profiles = coord.items.map((item) => {
      return item.profile;
    });

    const LayoutClass = ymaps.templateLayoutFactory.createClass(Balloon());
    const map = new ymaps.Map(mapRef.current, {
      center: center,
      zoom: zoom,
    });

    profiles.map((item) => {
      let place = new ymaps.Placemark(
        item.city.geocode,
        {
          hintContent: "Открой меня, если я закрыт",
          balloonContentHeader: item.photo,
          balloonContentBody: item.name,
          balloonContentFooter: item.city.name,
        },
        {
          hideIconOnBalloonOpen: false,
          iconLayout: "default#image",
          iconImageHref: hint,
          iconImageSize: [60, 68],
          iconImageOffset: [-30, -63],
          balloonLayout: LayoutClass,
          balloonPanelMaxMapArea: 0,
        }
      );
      map.geoObjects.add(place);
      place.balloon.open();
    });
  }, [ymaps]);

  return <div ref={mapRef} className={cnStyles()} />;
};

export default CustomMap;
