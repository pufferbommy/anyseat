import { Button, Card, CardBody, CardHeader, Chip, Image } from "@heroui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperInstance } from 'swiper';
import type { Place as PlaceType } from "~/types/place";

interface PlaceProps {
  place: PlaceType;
}

export default function Place({ place }: PlaceProps) {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const [navState, setNavState] = useState<'beginning' | 'middle' | 'end' | 'single'>(
    (place.images?.length ?? 0) > 1 ? 'beginning' : 'single'
  );

  const updateNavState = (swiperInstance: SwiperInstance) => {
    if (swiperInstance.isBeginning && swiperInstance.isEnd) {
      setNavState('single');
    } else if (swiperInstance.isBeginning) {
      setNavState('beginning');
    } else if (swiperInstance.isEnd) {
      setNavState('end');
    } else {
      setNavState('middle');
    }
  };

  return (
    <Link to={`/places/${place.id}`} className="block" viewTransition>
      <Card className='shadow-none group'>
      <CardHeader className='p-0 relative'>
        <Chip className="absolute left-3 top-3 z-10">{place.type}</Chip>
        <Swiper
          onSwiper={setSwiper}
          onSlideChange={updateNavState}
          onUpdate={updateNavState}
          pagination={{
            el: '.swiper-pagination-custom',
            clickable: true,
            bulletClass: "w-2 h-2 rounded-full bg-white/50 cursor-pointer",
            bulletActiveClass: "!bg-white",
          }}
          modules={[Pagination]}
          className='aspect-square'
          resistanceRatio={0}
        >
          {place.images?.map((image, index) => (
            <SwiperSlide key={image}>
              <Image
                removeWrapper
                src={image}
                alt={place.name}
                radius="none"
                className="w-full h-full object-cover"
                style={index === 0 ? { viewTransitionName: `place-image-${place.id}` } : undefined}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-0 flex items-center justify-between px-3 z-10">
          <Button onPress={() => swiper?.slidePrev()} size="sm" isIconOnly radius="full" className={`transition-opacity opacity-0 ${navState !== 'beginning' && navState !== 'single' ? 'group-hover:opacity-100' : 'pointer-events-none'}`}>
            <ChevronLeft size={16} />
          </Button>
          <Button onPress={() => swiper?.slideNext()} size="sm" isIconOnly radius="full" className={`transition-opacity opacity-0 ${navState !== 'end' && navState !== 'single' ? 'group-hover:opacity-100' : 'pointer-events-none'}`}>
            <ChevronRight size={16} />
          </Button>
        </div>
        <div className="swiper-pagination-custom absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5" />
      </CardHeader>
      <CardBody className="p-0 pt-3 gap-1.5">
        <h3 className="font-bold text-lg" style={{ viewTransitionName: `place-title-${place.id}` }}>{place.name}</h3>
        {place.address && <div className="text-xs text-gray-500 truncate" style={{ viewTransitionName: `place-address-${place.id}` }}>{place.address}</div>}
        {place.description && <p className="text-sm truncate" style={{ viewTransitionName: `place-description-${place.id}` }}>{place.description}</p>}
        <div className="flex gap-1.5 text-xs">
          {place.wifiAvailable && <Chip size="sm">Wi-Fi</Chip>}
          {place.powerOutlets && <Chip size="sm">Power Outlets</Chip>}
        </div>
      </CardBody>
    </Card>
    </Link>
  )
}
