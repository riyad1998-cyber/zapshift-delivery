import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const position = [23.6850, 90.3563];
const servicePoint = useLoaderData();

  return (
    <div className="mt-4 mb-4">
      <h2 className="font-extrabold text-[56px]">
        We are available in 64 districts
      </h2>
      {/* Map container */}
      <div className=" w-full h-[800px]">
        <MapContainer className="h-[800px]" center={position} zoom={8} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {
            servicePoint.map(center =><Marker position={[center.latitude, center.longitude ]}>
            <Popup>
              <strong>{center.district}</strong> <br /> {center.covered_area.join(', ')}
            </Popup>
          </Marker> )
          }
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
