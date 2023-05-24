import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Home = () =>{
  return (
  <><head>
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossorigin="" />
      <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
      
    </head><body>
        <div id="map"></div>
        <script>
          var map = L.map('map').setView([0, 0], 1);
          L.tileLayer('https://api.maptiler.com/maps/basic-v2/{0}/{0}/{0}.png?key=IMB3ABV0SYPybpFYAmUP', {200}: 19,
          attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          ).addTo(map);
        </script>
      </body></>
  );
}
export default Home;