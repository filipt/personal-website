import React from "react";
import { VectorMap } from "react-jvectormap";
const { getCode, getName, getData } = require("country-list");

const mapData = {
    PL:1,
    GB:1,
    US:1,
    HK:1,
    CN:1,
    PT:1,
    FI:1,
    SE:1,
    BE:1,
    NL:1,
    LT:1,
    CH:1,
    UA:1,
    FR:1,
    IS:1, 
    IL:1,   
};
const handleClick = (e, countryCode) => {
  console.log(countryCode);
};
const Map = () => {
  return (
    <div>
      <VectorMap
        map={"world_mill"}
        backgroundColor="transparent" //change it to ocean blue: #0077be
        zoomOnScroll={false}
        containerStyle={{
          width: "100%",
          height: "520px"
        }}
        onRegionClick={handleClick} //gets the country code
        containerClassName="map"
        regionStyle={{
          initial: {
            fill: "#e4e4e4",
            "fill-opacity": 0.9,
            stroke: "none",
            "stroke-width": 0,
            "stroke-opacity": 0
          },
          hover: {
            "fill-opacity": 0.8,
            cursor: "pointer"
          },
          selected: {
            fill: "#2938bc" //color for the clicked country
          },
          selectedHover: {}
        }}
        regionsSelectable={true}
        series={{
          regions: [
            {
              values: mapData, //this is your data
              scale: ["#146804", "#ff0000"], //your color game's here
              normalizeFunction: "polynomial"
            }
          ]
        }}
      />
    </div>
  );
};
export default Map;
