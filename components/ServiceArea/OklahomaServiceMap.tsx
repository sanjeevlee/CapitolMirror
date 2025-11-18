import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";


const DefaultIcon = L.icon({
  iconUrl: (iconUrl as unknown as { src: string }).src || "",
  shadowUrl: (iconShadow as unknown as { src: string }).src || "",
});

L.Marker.prototype.options.icon = DefaultIcon;

const OklahomaServiceMap: React.FC = () => {
  const cities = [
    { name: "Edmond",     coords: [35.6528,   -97.4781]    as [number, number] }, // :contentReference[oaicite:0]{index=0}
    { name: "Norman",     coords: [35.2226,   -97.4395]    as [number, number] }, // :contentReference[oaicite:1]{index=1}
    { name: "Yukon",      coords: [35.5067,   -97.7625]    as [number, number] }, // :contentReference[oaicite:2]{index=2}
    { name: "Moore",      coords: [35.3395,   -97.4867]    as [number, number] }, // (coords assumed — you might want to verify)
    { name: "Piedmont",   coords: [35.6428,   -97.7464]    as [number, number] }, // (coords assumed — verify)
    { name: "Mustang",    coords: [35.3842,   -97.7245]    as [number, number] }, // :contentReference[oaicite:3]{index=3}
    { name: "Newcastle",   coords: [35.2473,   -97.5998]    as [number, number] }, // (coords assumed — verify)
    { name: "Goldsby",     coords: [35.2400,   -97.4150]    as [number, number] }, // (coords assumed — verify)
    { name: "Del City",    coords: [35.4420,   -97.4409]    as [number, number] }, // (coords assumed — verify)
    { name: "The Village", coords: [35.5609,   -97.5514]    as [number, number] }, // :contentReference[oaicite:4]{index=4}
    { name: "Nichols Hills", coords: [35.5200, -97.5540]    as [number, number] }, // (coords assumed — verify)
    { name: "Bethany",      coords: [35.5167,   -97.5595]    as [number, number] }, // (coords assumed — verify)
    { name: "Midwest City", coords: [35.4495,   -97.3967]    as [number, number] }, // (coords assumed — verify)
    { name: "Shawnee",      coords: [35.3273,   -96.9253]    as [number, number] }, // (coords assumed — verify)
    { name: "Choctaw",      coords: [35.4812,   -97.3948]    as [number, number] }, // (coords assumed — verify)
    { name: "Jones",        coords: [35.4734,   -97.3216]    as [number, number] }, // (coords assumed — verify)
    { name: "Harrah",       coords: [35.5161,   -97.3537]    as [number, number] }, // (coords assumed — verify)
    { name: "Stillwater",   coords: [36.1156,   -97.0584]    as [number, number] }, // (coords assumed — verify)
    { name: "Blanchard",    coords: [35.1487,   -97.6581]    as [number, number] }, // (coords assumed — verify)
    { name: "Middleberg",   coords: [35.2092,   -97.5602]    as [number, number] }, // (coords assumed — verify)
    { name: "McLoud",       coords: [35.5356,   -97.1017]    as [number, number] }, // (coords assumed — verify)
    { name: "Guthrie",      coords: [35.8565,   -97.4231]    as [number, number] }, // (coords assumed — verify)
    { name: "Perkins",      coords: [35.8784,   -97.0241]    as [number, number] }, // (coords assumed — verify)
    { name: "Chandler",     coords: [35.6990,   -96.8647]    as [number, number] }, // (coords assumed — verify)
    { name: "Prague",       coords: [35.4867,   -96.6850]    as [number, number] }, // (coords assumed — verify)
    { name: "Tecumseh",     coords: [35.3039,   -96.8578]    as [number, number] }, // (coords assumed — verify)
    { name: "Purcell",      coords: [35.0156,   -97.3697]    as [number, number] }, // (coords assumed — verify)
    { name: "Washington",   coords: [34.9675,   -97.1129]    as [number, number] }, // (coords assumed — verify)
    { name: "Chickasha",    coords: [35.0526,   -97.9364]    as [number, number] }, // :contentReference[oaicite:5]{index=5}
    { name: "Hall Park",     coords: [35.3836,   - -97.3718]   as [number, number] }, // (coords assumed — verify)
    { name: "Tuttle",        coords: [35.2901,   -97.8128]    as [number, number] }, // (coords assumed — verify)
    { name: "AND MUCH MORE",  coords: [35.4676,   -97.5164]    as [number, number] }, // This is a placeholder/catch-all
  ];
  
  const okcCenter: [number, number] = [35.4676, -97.5164];

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-gray-100 mb-4 leading-tight">
            Providing all of OKC with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-sky-500">
              Commercial and Residential Glass Services
            </span>
          </h2>
          <p className="text-[var(--text)] leading-relaxed text-md mb-4">
            Are you a builder of homeowner looking for custom glasswork in Oklahoma City or the surrounding communities? Capitol Glass & Mirror is ready and waiting to help you with your residential or commercial building project. We service all of <strong>Oklahoma City and Oklahoma County, Cleveland County, McClain County, Logan County, Pottawatomie County, Canadian County, Lincoln County</strong> and much more including but not limited to the following cities:
          </p>
          <ul className="grid grid-cols-3 gap-x-4 gap-y-3 text-gray-700 dark:text-gray-300 mb-8">
            {cities.map((city, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <FaCheckCircle className="text-blue-500 dark:text-blue-400 mt-1" />
                <span>{city.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full h-[400px] sm:h-[450px] md:h-[530px] overflow-hidden rounded-3xl shadow-md">
          <MapContainer
            center={okcCenter}
            zoom={8}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%", borderRadius: "1rem" ,zIndex:"10" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {cities.map((city, i) => (
              <Marker key={i} position={city.coords}>
                <Popup>{city.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default OklahomaServiceMap
