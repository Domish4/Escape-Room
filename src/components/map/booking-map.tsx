import { Marker, layerGroup } from 'leaflet';
import { useCallback, useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import { useAppDispatch, useAppSelector } from '../../hooks';
import useMap from '../../hooks/use-map';
import { changeCurrentPlace } from '../../store/action';
import { InfoQuest } from '../../types/booking-quest';
import { activeCustomIcon, defaultCustomIcon } from '../../constants/const';


function MapBooking(): JSX.Element {
  const dispatch = useAppDispatch();
  const mapRef = useRef(null);
  const infoOfQuestBook = useAppSelector((state) => state.InfoBookingQuest);
  let currentQuest = useAppSelector((state) => state.SingleInfoBook);


  if (!currentQuest) {
    currentQuest = infoOfQuestBook[0];
  }


  const map = useMap(mapRef, {latitude: currentQuest.location.coords[0], longitude: currentQuest.location.coords[1]});

  const handleMarkerClick = useCallback((infoQuest: InfoQuest): void => {
    dispatch(changeCurrentPlace(infoQuest));
  }, [dispatch]);


  useEffect(() => {
    if (map && currentQuest) {
      map
        .setView(currentQuest.location.coords);

      const markerLayer = layerGroup().addTo(map);

      infoOfQuestBook.forEach((place) => {
        const marker = new Marker({
          lat: place.location.coords[0],
          lng: place.location.coords[1]
        });

        marker
          .setIcon(
            currentQuest && place.location.address === currentQuest.location.address
              ? activeCustomIcon
              : defaultCustomIcon
          ).on('click', () => handleMarkerClick(place))
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, infoOfQuestBook, currentQuest, handleMarkerClick]);

  return (
    <div className="booking-map">
      <div className="map">
        <div className="map__container" ref={mapRef}></div>
      </div>
      <p className="booking-map__address">Вы&nbsp;выбрали: {currentQuest.location.address}</p>
    </div>
  );
}

export default MapBooking;
