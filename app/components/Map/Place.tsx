import { Card, CardBody, CardHeader, Chip, Image } from "@heroui/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Place as PlaceType } from "~/types/place";
import { Navigation, Pagination } from 'swiper/modules';

interface PlaceProps {
  place: PlaceType;
}

export default function Place({ place }: PlaceProps) {
  return (
    <Card className='shadow-none'>
      <CardHeader className='p-0'>
        <Chip className="absolute left-3 top-3 z-10">{place.type}</Chip>
        <Swiper navigation pagination={{ clickable: true }} modules={[Navigation, Pagination]} className='rounded-lg aspect-square' resistanceRatio={0}>
          {place.images?.map((image) => (
            <SwiperSlide className='overflow-hidden h-full first:rounded-l-lg last:rounded-r-lg'>
              <Image
                removeWrapper
                src={image}
                alt={place.name}
                radius="none"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </CardHeader>
      <CardBody className="p-0 pt-3 gap-1.5">
        <h3 className="font-bold text-lg">{place.name}</h3>
        {place.address && <div className="text-xs text-gray-500 truncate">{place.address}</div>}
        {place.description && <p className="text-sm truncate">{place.description}</p>}
        <div className="flex gap-1.5 text-xs">
          {place.wifiAvailable && <Chip size="sm">Wi-Fi</Chip>}
          {place.powerOutlets && <Chip size="sm">Power Outlets</Chip>}
        </div>
      </CardBody>
    </Card>
  )
}