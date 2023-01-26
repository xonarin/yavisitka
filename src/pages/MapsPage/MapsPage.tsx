import React, { useRef, useEffect, useState } from "react";
import CustomMap from "../../components/CustomMap/CustomMap";
import { YMaps } from "@pbe/react-yandex-maps";
import { profilesGet } from "../../utils/api-test-data";
import InputSuggestView from "../../components/Input/InputSuggestView/InputSuggestView";
import { baseApiUrl, checkResponse, getProfiles } from "../../utils/api";
import { TCards } from "../../utils/types";

const MapsPage = () => {
  const [profiles, setProfiles] = useState<TCards>();

  useEffect(() => {
    getProfiles()
      .then((res) => {
        if(res) {
          setProfiles(res)
        }
      })
      .catch((err) => {
        console.error(err);
      })
  }, []);

  return (
    <YMaps
      query={{
        load: "package.full",
        apikey: "6bbb9fad-fe92-4de7-aed3-2caa0584dade",
      }}
    >
      {profiles &&
        <CustomMap coord={profiles} center={[55.76, 37.64]} zoom={7} />
      }
    </YMaps>
  );
};

export default MapsPage;
