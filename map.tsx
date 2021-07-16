/* import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';



const Map = () => {
	const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);
	const [position, setPosition] = useState<[number, number]>([0, 0]);



	function HandleMapClick() {
		const map = useMapEvents({
			click() {
				map.locate()
  	  },
			locationfound: (location) => {
				setPosition([
					location.latlng.lat,
					location.latlng.lng,
				]);
				map.setView(location.latlng);

    	},
  	});
		return (
			<Marker position={position}>
      	<Popup>You are here</Popup>
    	</Marker>
  	)
	};

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(position => {
			const { latitude, longitude } = position.coords;

			setInitialPosition([latitude, longitude]);
			console.log(initialPosition, latitude, longitude)
		});
	}, []);

	return (
  	<MapContainer
  	  center={initialPosition}
  	  zoom={15}
  	  scrollWheelZoom={false}
			>

  	  <TileLayer
  	    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  	    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  	  />
			<HandleMapClick />
			<Marker position={position} />
  	</MapContainer>
	);
};

export default Map; */
