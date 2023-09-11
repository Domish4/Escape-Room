import { Icon } from 'leaflet';

export const activeCustomIcon = new Icon({
  iconUrl: '/img/svg/pin-active.svg',
  iconSize: [23, 42],
  iconAnchor: [11.5, 42]

});

export const defaultCustomIcon = new Icon({
  iconUrl: '/img/svg/pin-default.svg',
  iconSize: [23, 42],
  iconAnchor: [11.5, 42]
});

export const ZOOM = 10;
export const TIMEOUT_SHOW_ERROR = 8000;

