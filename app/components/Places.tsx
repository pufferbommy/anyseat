import type { Place as PlaceType } from '~/types/place';
import Place from './Place';
import { Pagination } from '@heroui/react';

interface PlacesProps {
  places: PlaceType[];
  selectedPlaceId: string | null;
  onSelectPlace: (id: string | null) => void;
}

const Places = ({ places, selectedPlaceId, onSelectPlace }: PlacesProps) => {
  return (
    <div className='space-y-5'>
      <div className='grid grid-cols-2 gap-5'>
        {places.map((place) => <Place key={place.id} place={place} />)}
      </div>
      <Pagination className='flex justify-center' initialPage={1} total={10} />
    </div>
  );
};

export default Places;