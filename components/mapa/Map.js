// Leaflet
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";

import Head from "next/head";

// React
import { useState, useEffect } from "react";
import { Icon } from "leaflet";

// Iconos de marcadores personalizados
const myIcon = new L.Icon({
    iconUrl: "/images/marker.png",
    iconSize: [40, 40],
    iconAnchor: [12, 41],
    popupAnchor: [0, -36],
});

export default function Map({ filtros }) {
  console.log(filtros);

  const [placeResponse, setPlaces] = useState([]);
  useEffect(() => {
    async function getPlaces()
    {
      const response = await fetch('http://localhost:3000/api/place');
      const res = await response.json();
      console.log(res.result);
      setPlaces(res.result);
    }
    getPlaces();
  }, []);

  const position_valdivia = [-39.823651901716296, -73.23533346913247];
  var marker = position_valdivia;
  return (
    <>
      <Head>
        <title>Mapa Mechon</title>
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
          {placeResponse.map((place) => {
            return (
              <Marker position={[place.latitude, place.longitude]} icon={myIcon}>
                <Popup>
                  <b>{place.name}</b><br /> {place.description}
                </Popup>
              </Marker>
            )
          })}
        </MapContainer>
      </div>
    </>
  );
}