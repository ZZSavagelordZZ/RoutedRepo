import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import axios from 'axios';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const icons = {
  restaurant: new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/685/685352.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    shadowSize: [41, 41],
  }),
  hospital: new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    shadowSize: [41, 41],
  }),
  clinic: new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    shadowSize: [41, 41],
  }),
  doctors: new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    shadowSize: [41, 41],
  }),
  default: new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    shadowSize: [41, 41],
  }),
};

const MapComponent = () => {
  const [position, setPosition] = useState(null);
  const [pointsOfInterest, setPointsOfInterest] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPOIs, setFilteredPOIs] = useState([]);

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setPosition([latitude, longitude]);
        fetchPointsOfInterest(latitude, longitude);
      },
      (error) => {
        console.error('Error fetching location:', error);
      }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  const fetchPointsOfInterest = async (lat, lng, radius = 1500) => {
    const query = `
      [out:json];
      node
        [amenity~"${searchQuery}"]
        (around:${radius}, ${lat}, ${lng});
      out body;
    `;
    try {
      const response = await axios.post('https://overpass-api.de/api/interpreter', query, {
        headers: { 'Content-Type': 'text/plain' },
      });
      const pois = response.data.elements.map(poi => ({
        lat: poi.lat,
        lng: poi.lon,
        name: poi.tags.name || 'Unnamed POI',
        amenity: poi.tags.amenity,
      }));
      setPointsOfInterest(pois);
      setFilteredPOIs(pois);
    } catch (error) {
      console.error('Error fetching points of interest:', error);
    }
  };

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    if (query) {
      const radius = 5000; // Increase the search radius when a query is used
      fetchPointsOfInterest(position[0], position[1], radius);
    } else {
      fetchPointsOfInterest(position[0], position[1]);
    }
  };

  const getIcon = (amenity) => {
    switch (amenity) {
      case 'restaurant':
        return icons.restaurant;
      case 'hospital':
        return icons.hospital;
      case 'clinic':
        return icons.clinic;
      case 'doctors':
        return icons.doctors;
      default:
        return icons.default;
    }
  };

  if (!position) {
    return <div>Loading map...</div>;
  }

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search by category (e.g., hospital, restaurant)"
        style={{ marginBottom: '10px', padding: '5px', width: '100%' }}
      />
      <MapContainer center={position} zoom={13} style={{ height: '80vh', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} className="text-white">
          <Popup>You are here</Popup>
        </Marker>
        {filteredPOIs.map((poi, index) => (
          <Marker key={index} position={[poi.lat, poi.lng]} icon={getIcon(poi.amenity)}>
            <Popup>
              {poi.name} - {poi.amenity}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;


// import React, { useEffect, useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';
// import axios from 'axios';

// delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
//   iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
//   shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
// });

// const icons = {
//   restaurant: new L.Icon({
//     iconUrl: 'https://cdn-icons-png.flaticon.com/512/685/685352.png',
//     iconSize: [25, 41],
//     iconAnchor: [12, 41],
//     popupAnchor: [1, -34],
//     shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
//     shadowSize: [41, 41],
//   }),
//   hospital: new L.Icon({
//     iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
//     iconSize: [25, 41],
//     iconAnchor: [12, 41],
//     popupAnchor: [1, -34],
//     shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
//     shadowSize: [41, 41],
//   }),
//   clinic: new L.Icon({
//     iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
//     iconSize: [25, 41],
//     iconAnchor: [12, 41],
//     popupAnchor: [1, -34],
//     shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
//     shadowSize: [41, 41],
//   }),
//   doctors: new L.Icon({
//     iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
//     iconSize: [25, 41],
//     iconAnchor: [12, 41],
//     popupAnchor: [1, -34],
//     shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
//     shadowSize: [41, 41],
//   }),
//   default: new L.Icon({
//     iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
//     iconSize: [25, 41],
//     iconAnchor: [12, 41],
//     popupAnchor: [1, -34],
//     shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
//     shadowSize: [41, 41],
//   }),
// };

// const MapComponent = () => {
//   const [position, setPosition] = useState(null); // Initialize as null to indicate loading
//   const [pointsOfInterest, setPointsOfInterest] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredPOIs, setFilteredPOIs] = useState([]);

//   useEffect(() => {
//     const watchId = navigator.geolocation.watchPosition(
//       (pos) => {
//         const { latitude, longitude } = pos.coords;
//         setPosition([latitude, longitude]);
//         fetchPointsOfInterest(latitude, longitude);
//       },
//       (error) => {
//         console.error('Error fetching location:', error);
//       }
//     );

//     return () => navigator.geolocation.clearWatch(watchId);
//   }, []);

//   const fetchPointsOfInterest = async (lat, lng) => {
//     const query = `
//       [out:json];
//       node
//         [amenity]
//         (around:1500, ${lat}, ${lng});
//       out body;
//     `;
//     try {
//       const response = await axios.post('https://overpass-api.de/api/interpreter', query, {
//         headers: { 'Content-Type': 'text/plain' },
//       });
//       const pois = response.data.elements.map(poi => ({
//         lat: poi.lat,
//         lng: poi.lon,
//         name: poi.tags.name || 'Unnamed POI',
//         amenity: poi.tags.amenity,
//       }));
//       setPointsOfInterest(pois);
//       setFilteredPOIs(pois);
//     } catch (error) {
//       console.error('Error fetching points of interest:', error);
//     }
//   };

//   const handleSearch = (event) => {
//     setSearchQuery(event.target.value);
//     filterPOIs(event.target.value);
//   };

//   const filterPOIs = (query) => {
//     const filtered = pointsOfInterest.filter(poi =>
//       poi.name.toLowerCase().includes(query.toLowerCase())
//     );
//     setFilteredPOIs(filtered);
//   };

//   const getIcon = (amenity) => {
//     switch (amenity) {
//       case 'restaurant':
//         return icons.restaurant;
//       case 'hospital':
//         return icons.hospital;
//       case 'clinic':
//         return icons.clinic;
//       case 'doctors':
//         return icons.doctors;
//       default:
//         return icons.default;
//     }
//   };

//   if (!position) {
//     return <div>Loading map...</div>; // Display a loading state while fetching location
//   }

//   return (
//     <div>
//       <input
//         type="text"
//         value={searchQuery}
//         onChange={handleSearch}
//         placeholder="Search POIs"
//         style={{ marginBottom: '10px', padding: '5px', width: '100%' }}
//       />
//       <MapContainer center={position} zoom={13} style={{ height: '80vh', width: '100%' }}>
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />
//         <Marker position={position} className="text-white">
//           <Popup>You are here</Popup>
//         </Marker>
//         {filteredPOIs.map((poi, index) => (
//           <Marker key={index} position={[poi.lat, poi.lng]} icon={getIcon(poi.amenity)}>
//             <Popup>
//               {poi.name} - {poi.amenity}
//             </Popup>
//           </Marker>
//         ))}
//       </MapContainer>
//     </div>
//   );
// };

// export default MapComponent;
