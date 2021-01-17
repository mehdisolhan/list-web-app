import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

const ResizeMap = ({ position }) => {
  const map = useMap();
  map._onResize();
  map.setView(position, 10);
  return null;
};

const Location = ({ locationData }) => {
  if (locationData) {
    let position = [locationData.latitude, locationData.longitude];
    return (
      <div className="location-container">
        <MapContainer
          style={{ height: "310px", width: "450px" }}
          center={position}
          zoom={10}
          scrollWheelZoom={false}
        >
          <ResizeMap position={position} />
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>{locationData.type}</Popup>
          </Marker>
        </MapContainer>
      </div>
    );
  } else {
    return <div className="location-container"></div>;
  }
};

export default Location;
