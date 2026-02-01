import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import type { Place } from '~/types/place';
import { Button } from '@heroui/react';
import { Maximize2, Minus, Plus } from 'lucide-react';
import L from 'leaflet';

interface PlaceMapProps {
  places: Place[];
  selectedPlaceId: string | null;
  onSelectPlace: (id: string | null) => void;
}

const getTypeEmoji = (type: string): string => {
  switch (type) {
    case 'cafe':
      return '☕';
    case 'library':
      return '📚';
    case 'workspace':
      return '💼';
    default:
      return '📍';
  }
};

const createCustomIcon = (name: string, type: string, isSelected: boolean) => {
  return L.divIcon({
    className: 'custom-marker',
    html: `<div class="
      ${isSelected ? 'scale-125' : ''}
      drop-shadow-lg
      transition-transform
      duration-200
      relative
    ">
      <span class="absolute bottom-full text-center left-1/2 -translate-x-1/2">${name}</span>
      <span class="text-2xl">${getTypeEmoji(type)}</span>
    </div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });
};

const PlaceMap: React.FC<PlaceMapProps> = ({ places, selectedPlaceId, onSelectPlace }) => {
  const defaultPosition: [number, number] = [13.7563, 100.5018];
  const defaultZoom = 13;

  return (
    <MapContainer center={defaultPosition} zoom={defaultZoom} className="w-full h-full" zoomControl={false}>
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution="&copy; OpenStreetMap contributors &copy; CARTO"
      />
      {places.map((place) => (
        <Marker
          key={place.id}
          position={[place.coordinates.lat, place.coordinates.lng]}
          icon={createCustomIcon(place.name, place.type, place.id === selectedPlaceId)}
          eventHandlers={{
            click: () => {
              onSelectPlace(place.id);
            },
          }}
        >
          <Popup>
            {place.images && place.images.length > 0 && (
              <img
                src={place.images[0]}
                alt={place.name}
                className="w-full h-32 object-cover mb-2 rounded"
              />
            )}
            <div className="font-bold text-lg">{place.name}</div>
            <div className="text-sm text-gray-600 capitalize">{place.type}</div>
            {place.images && place.images.length > 1 && (
              <div className="text-xs text-neutral-500 mt-1">+{place.images.length - 1} รูปภาพเพิ่มเติม</div>
            )}
            {place.address && <div className="text-xs text-gray-500">{place.address}</div>}
            {place.description && <p className="mt-1 text-sm">{place.description}</p>}
            <div className="flex text-xs mt-2">
              {place.wifiAvailable && <span className="mr-2 text-green-600">Wi-Fi</span>}
              {place.powerOutlets && <span className="text-blue-600">Power Outlets</span>}
            </div>
          </Popup>
        </Marker>
      ))}
      <MapControls />
      <MapController selectedPlaceId={selectedPlaceId} places={places} />
    </MapContainer>
  );
};

const MapController: React.FC<{ selectedPlaceId: string | null; places: Place[] }> = ({
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

const MapControls = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if(ref.current) {
      L.DomEvent.disableClickPropagation(ref.current)
      L.DomEvent.disableScrollPropagation(ref.current)
    }
  }, [])

  return <div ref={ref} className="absolute top-5 right-5 z-400 grid gap-3">
    <Button isIconOnly variant='faded'>
      <Maximize2 size={16} />
    </Button>
    <div className='grid'>
      <ZoomInButton />
      <ZoomOutButton />
    </div>
  </div>
}

const ZoomInButton = () => {
  const map = useMap()

  return (
    <Button onPress={() => map.zoomIn()} isIconOnly variant="faded" className='rounded-b-none'>
      <Plus size={16} />
    </Button>
  )
}

const ZoomOutButton = () => {
  const map = useMap()
  
  return (
    <Button onPress={() => map.zoomOut()} isIconOnly variant='faded' className='rounded-t-none -mt-0.5'>
      <Minus size={16} />
    </Button>
  )
}

export default PlaceMap;