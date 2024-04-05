import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../style/Map.css'; // Import CSS file from the styles directory

function Map({ weatherData }) {
  return (
    <div className="map-container">
      <MapContainer center={[weatherData.coord.lat, weatherData.coord.lon]} zoom={12}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[weatherData.coord.lat, weatherData.coord.lon]}>
          <Popup>
            {weatherData.name}, {weatherData.sys.country}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
