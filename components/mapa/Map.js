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
  const position_valdivia = [-39.823651901716296, -73.23533346913247];
  
  const [placeResponse, setPlaces] = useState([]);
  useEffect(() => {
    async function getPlaces()
    {
      const response = await fetch('https://majinvaldi.000webhostapp.com/place');
      let res = [];
      const tmp = await response.json();
      if(filtros.length > 0){
        tmp.forEach(place => {
            if(filtros.includes(place.category))
            {
              res.push(place);
            }
        });
      } else { res = tmp; }
      setPlaces(res);
    }
    getPlaces();
  }, [filtros]);
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
          {(placeResponse != null)?placeResponse.map((place) => {
            return (
              <Marker position={[place.latitude, place.longitude]} icon={myIcon}>
                <Popup>
                  <Place name={place.name} description={place.description} ups={place.upvotes} downs={place.downvotes} />
                </Popup>
              </Marker>
            )
          }):<p></p>}
        </MapContainer>
      </div>
    </>
  );
}