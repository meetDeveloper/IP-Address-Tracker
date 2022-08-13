import React from "react";

import L from "leaflet";
import iconUrl from "../images/icon-location.svg";
import "leaflet/dist/leaflet.css";
import { Map as MapContainer, TileLayer, Marker } from "react-leaflet";

export default function Map({ lat, lng }) {
  const position = [lat, lng];
  const Icon = L.icon({
    iconUrl: iconUrl,
  });

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} id="map">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={Icon}></Marker>
    </MapContainer>
  );
}
