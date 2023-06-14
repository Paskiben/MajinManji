// Leaflet
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";

import Head from "next/head";

// React
import { useState, useEffect } from "react";
import Place from "./Place";

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
      const response = await fetch('https://majinvaldi.000webhostapp.com/place');
      const res = [];
      const tmp = await response.json();
      tmp.forEach(place => {
        if(filtros.includes(place.category))
        {
          res.push(place);
        }
      });
      setPlaces(res);
    }
    getPlaces();
  }, []);

  const position_valdivia = [-39.823651901716296, -73.23533346913247];
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
                  <Place name={place.name} description={place.description} ups={place.upvotes} downs={place.downvotes} />
                </Popup>
              </Marker>
            )
          })}
        </MapContainer>
      </div>
    </>
  );
}