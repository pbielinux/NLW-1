import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';



const Map = () => {
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
	}

	return (
  	<MapContainer
  	  center={{ lat: 51.505, lng: -0.09 }}
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

export default Map;
