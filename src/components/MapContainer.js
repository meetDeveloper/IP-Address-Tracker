import React from "react";

import L from "leaflet";
import iconUrl from "../images/icon-location.svg";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

export default function Map({ lat, lng }) {
  const position = [lat, lng];
  const Icon = L.icon({
    iconUrl: iconUrl,
  });

  function ChangeView({ lat, lng, zoom }) {
    var map = L.map("map").setView([lat, lng], zoom);
  }
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} id="map">
      <ChangeView lat={lat} lng={lng} zoom={13} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={Icon}></Marker>
    </MapContainer>
  );
}
