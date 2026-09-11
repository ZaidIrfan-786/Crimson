import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "./CSS/Nearby.css";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;

  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  return (
    R *
    2 *
    Math.atan2(
      Math.sqrt(a),
      Math.sqrt(1 - a)
    )
  );
}

function Nearby() {
  const [location, setLocation] = useState(null);
  const [bakeries, setBakeries] = useState([]);
  const [search, setSearch] = useState("");
  const [userCoords, setUserCoords] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        setLocation([lat, lon]);
        setUserCoords({
          lat,
          lon,
        });

        const query = `
[out:json];
(
  node["shop"="bakery"](around:5000,${lat},${lon});
  way["shop"="bakery"](around:5000,${lat},${lon});
  relation["shop"="bakery"](around:5000,${lat},${lon});
);
out center;
`;

        fetch(
          "https://overpass-api.de/api/interpreter",
          {
            method: "POST",
            body: query,
          }
        )
          .then((res) => res.json())
          .then((data) => setBakeries(data.elements));

      },
      () => {
        alert("Location permission denied");
      }
    );
  }, []);

  const searchCity = async () => {
    if (!search) return;

    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${search}&format=jsonv2&limit=1`
    );

    const data = await res.json();

    if (data.length > 0) {
      setLocation([
        parseFloat(data[0].lat),
        parseFloat(data[0].lon),
      ]);
    }
  };

  return (
    <div className="nearby-page">

      <div className="locator-header">
        <h1>Find Nearby Bakeries</h1><br /><br />

        <div className="search-box">
          <input
            type="text"
            placeholder="Enter city..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button onClick={searchCity}>
            Search
          </button>
        </div>
      </div>

      {location && (
        <MapContainer
          center={location}
          zoom={13}
          className="map"
        >
          <TileLayer
            attribution="OpenStreetMap"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={location}>
            <Popup>Your Location</Popup>
          </Marker>
        </MapContainer>
      )}

      <div className="bakery-grid">

        {bakeries.map((bakery, index) => {

  const bakeryLat =
    bakery.lat || bakery.center?.lat;

  const bakeryLon =
    bakery.lon || bakery.center?.lon;

  const distance =
    userCoords &&
    getDistance(
      userCoords.lat,
      userCoords.lon,
      parseFloat(bakeryLat),
      parseFloat(bakeryLon)
    );

  return (
          <div className="bakery-card" key={index}>

            <h3>
              {bakery.tags?.name || "Bakery"}
            </h3>

           <p>
  {bakery.tags?.addr_street ||
    "Address unavailable"}
</p>

{distance && (
  <p>
    🚶 {distance.toFixed(1)} km away
  </p>
)}

            <div className="card-buttons">

              <a
               href={`https://www.google.com/maps?q=${bakery.lat || bakery.center?.lat},${bakery.lon || bakery.center?.lon}`}
                target="_blank"
                rel="noreferrer"
              >
                Directions
              </a>

            </div>

          </div>
        );
})}

      </div>

    </div>
  );
}

export default Nearby;