import { FC, useRef, useEffect } from "react";
import { block } from "bem-cn";
import { useYMaps } from "@pbe/react-yandex-maps";
import Balloon from "../../components/BalloonLayout/BalloonLayout";
import hint from "../../assets/images/hint.png";
import { TCards } from "../../utils/types";
import "./CustomMap.scss";

export interface CustomMapProps {
  coord: TCards;
  center: number[];
  zoom: number;
}

const cnStyles = block("Map");

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
