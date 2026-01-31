import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { WorkplacePlace } from '~/types/workplace.d';

// Fix for default marker icon not showing
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

interface WorkplaceMapProps {
  places: WorkplacePlace[];
  selectedPlaceId: string | null;
  onSelectPlace: (id: string | null) => void;
}

const MapController: React.FC<{ selectedPlaceId: string | null; places: WorkplacePlace[] }> = ({
  selectedPlaceId,
  places,
}) => {
  const map = useMap();

  useEffect(() => {
    if (selectedPlaceId) {
      const selectedPlace = places.find((place) => place.id === selectedPlaceId);
      if (selectedPlace) {
        map.flyTo([selectedPlace.coordinates.lat, selectedPlace.coordinates.lng], 15);
      }
    }
  }, [selectedPlaceId, places, map]);

  return null;
};

const WorkplaceMap: React.FC<WorkplaceMapProps> = ({ places, selectedPlaceId, onSelectPlace }) => {
  const defaultPosition: [number, number] = [51.505, -0.09]; // Default to London
  const defaultZoom = 13;

  return (
    <MapContainer center={defaultPosition} zoom={defaultZoom} className="h-full w-full relative z-0">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {places.map((place) => (
        <Marker
          key={place.id}
          position={[place.coordinates.lat, place.coordinates.lng]}
          eventHandlers={{
            click: () => {
              onSelectPlace(place.id);
            },
          }}
        >
          <Popup>
            <div className="font-bold text-lg">{place.name}</div>
            <div className="text-sm text-gray-600 capitalize">{place.type}</div>
            {place.address && <div className="text-xs text-gray-500">{place.address}</div>}
            {place.description && <p className="mt-1 text-sm">{place.description}</p>}
            <div className="flex text-xs mt-2">
              {place.wifiAvailable && <span className="mr-2 text-green-600">Wi-Fi</span>}
              {place.powerOutlets && <span className="text-blue-600">Power Outlets</span>}
            </div>
          </Popup>
        </Marker>
      ))}
      <MapController selectedPlaceId={selectedPlaceId} places={places} />
    </MapContainer>
  );
};

export default WorkplaceMap;