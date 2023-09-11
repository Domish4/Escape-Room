import { useEffect, useRef } from 'react';
import { Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {ContactsLocation } from '../../constants/enums';
import useMap from '../../hooks/use-map';
import { defaultCustomIcon } from '../../constants/const';

function MapContacts(): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, {latitude: ContactsLocation.Lat, longitude: ContactsLocation.Lng});

  useEffect(() => {
    if (map) {
      const marker = new Marker({
        lat: ContactsLocation.Lat,
        lng: ContactsLocation.Lng
      });

      marker
        .setIcon(defaultCustomIcon)
        .addTo(map);
    }
  }, [map]);

  return (
    <div className="map">
      <div className="map__container" ref={mapRef}></div>
    </div>
  );
}

export default MapContacts;
