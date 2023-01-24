import React, { useRef, useEffect } from "react";
import CustomMap from "../../components/CustomMap/CustomMap";
import { YMaps } from "@pbe/react-yandex-maps";
import { profilesGet } from "../../utils/api-test-data";
import InputSuggestView from "../../components/Input/InputSuggestView/InputSuggestView";
import { baseApiUrl, checkResponse } from "../../utils/api";

const MapsPage = () => {
  useEffect(() => {
    const getProfiles = async () => {
      try {
        const res = await fetch(`${baseApiUrl}/profiles`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await checkResponse(res);
        console.log(data);
      } catch (error) {
        console.log(`Ошибка: ${error}`);
      }
    };

    getProfiles();
  }, []);

  return (
    <YMaps
      query={{
        load: "package.full",
        apikey: "6bbb9fad-fe92-4de7-aed3-2caa0584dade",
      }}
    >
      <CustomMap coord={profilesGet} center={[55.76, 37.64]} zoom={7} />
    </YMaps>
  );
};

export default MapsPage;
