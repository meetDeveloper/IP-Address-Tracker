import React from "react";

import ContentContainer from "./components/ContentContainer";
import Map from "./components/MapContainer";

export default function App() {
  const [data, setData] = React.useState();

  function makeRequest(searchString) {
    const request = new XMLHttpRequest();
    request.open(
      "GET",
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_L9cYQyhQPHUpV2SRV9c6jmH9aVnTS&${
        Number(searchString[0])
          ? `ipAddress=${searchString}`
          : `domain=${searchString}`
      }`
    );
    request.send();

    request.addEventListener("load", function () {
      console.log(request.status);
      if (request.status !== 200) {
        return;
      }

      const {
        ip,
        location: {
          region,
          city,
          lat: latitude,
          lng: longitude,
          postalCode,
          timezone,
        },
        isp,
      } = JSON.parse(request.responseText);

      setData({
        ip: ip,
        region: region,
        city: city,
        lat: latitude,
        lng: longitude,
        postalCode: postalCode,
        timezone: timezone,
        isp: isp,
      });
    });
  }

  function HandleKeypress(e) {
    if (e.key !== "Enter" || !e.target.value) {
      return;
    }
    const searchString = e.target.value;
    makeRequest(searchString);
  }

  function handleClick(e) {
    if (e.target.alt === "enter" && e.currentTarget.children[0].value) {
      const searchString = e.currentTarget.children[0].value;
      makeRequest(searchString);
    }
  }
  return (
    <>
      <ContentContainer
        handleClick={handleClick}
        HandleKeypress={HandleKeypress}
        data={data}
      />
      <Map lat={data?.lat || 51.505} lng={data?.lng || -0.09} />
    </>
  );
}
