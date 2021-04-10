import React from "react";
import { Map, TileLayer, Marker, Tooltip, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Mapa = ({ coordenadas, sourceLogo }) => {
  return (
    <Map
      style={{ height: "600px", borderRadius: "35px", zIndex: "0" }}
      center={coordenadas}
      zoom={18}
      maxZoom={19}
      minZoom={6}
      bounceAtZoomLimits={true}
      maxBoundsViscosity={0.95}
      maxBounds={[
        [20.097206227083888, -79.14550781250001],
        [5.441022303717974, -95.05371093750001],
      ]}
    >
      <TileLayer
        noWrap={true}
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {sourceLogo === undefined ? (
        <></>
      ) : (
        <Marker
          position={coordenadas}
          icon={
            new L.Icon({
              iconUrl: require(`../../assets/images/${sourceLogo}/logo.png`)
                .default,
              iconSize: [30, 30],
            })
          }
        >
          <Tooltip permanent>{sourceLogo}</Tooltip>
          <Popup>{sourceLogo}</Popup>
        </Marker>
      )}
    </Map>
  );
};

Mapa.defaultProps = {
  coordenadas: [14.094451140902498, -87.19079102693705],
};

export default Mapa;
