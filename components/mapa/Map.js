// Leaflet
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";

import Head from "next/head";

// React
import { useState, useEffect } from "react";

// Iconos de marcadores personalizados
const myIcon = L.icon({
    iconUrl: "/imagenes_mapa/marker-icon.svg",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [0, -36],
});

export default function Map({ comidas }) {
  console.log(filtros);

  const position_valdivia = [-39.823651901716296, -73.23533346913247];
  return (
    <>
      <Head>
        <title>Titulo metadato</title>
      </Head>
      <div className="map__box">
        {/* Configuraciones generales del Mapa, zoom, scroll, etc */}
        <MapContainer
          id="map"
          center={position_valdivia}
          zoom={14}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    </>
  );
}