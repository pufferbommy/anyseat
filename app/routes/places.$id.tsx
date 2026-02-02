import { Button } from "@heroui/react";
import { ArrowLeft, Wifi, Zap, MapPin, Clock, CheckCircle } from "lucide-react";
import { Link, useParams } from "react-router";
import mockPlaces from "~/data/mockPlaces.json";
import type { Place } from "~/types/place";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Image } from "@heroui/react";

export function meta({ params }: { params: { id: string } }) {
  const places = mockPlaces as Place[];
  const place = places.find(p => p.id === params.id);
  return [
    { title: place ? `${place.name} | Anyseat` : "Place Not Found | Anyseat" },
    { name: "description", content: place ? place.description : "Place not found" },
  ];
}

export default function PlaceDetail() {
  const { id } = useParams();
  const places = mockPlaces as Place[];
  const place = places.find(p => p.id === id);

  if (!place) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Place Not Found</h1>
            <Button as={Link} to="/places">
            <ArrowLeft size={16} />
            Back to Places
          </Button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <Button as={Link} to="/places" variant="light" className="mb-6">
          <ArrowLeft size={16} />
          Back to Places
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="rounded-xl aspect-[4/3]"
            >
              {place.images?.map((image) => (
                <SwiperSlide key={image}>
                  <Image
                    src={image}
                    alt={place.name}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="space-y-6">
            <div>
              <span className="inline-block px-3 py-1 text-sm font-medium bg-neutral-100 rounded-full text-neutral-600 mb-3">
                {place.type.charAt(0).toUpperCase() + place.type.slice(1)}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                {place.name}
              </h1>
              {place.address && (
                <div className="flex items-center gap-2 text-neutral-600 mb-4">
                  <MapPin size={18} />
                  <span>{place.address}</span>
                </div>
              )}
            </div>

            {place.description && (
              <div>
                <h2 className="text-lg font-semibold mb-2">About</h2>
                <p className="text-neutral-700 leading-relaxed">
                  {place.description}
                </p>
              </div>
            )}

            <div>
              <h2 className="text-lg font-semibold mb-3">Amenities</h2>
              <div className="flex flex-wrap gap-2">
                {place.wifiAvailable && (
                  <div className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-lg">
                    <Wifi size={18} />
                    <span className="font-medium">Wi-Fi Available</span>
                    <CheckCircle size={16} />
                  </div>
                )}
                {place.powerOutlets && (
                  <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg">
                    <Zap size={18} />
                    <span className="font-medium">Power Outlets</span>
                    <CheckCircle size={16} />
                  </div>
                )}
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-3">Hours</h2>
              <div className="flex items-center gap-2 text-neutral-600">
                <Clock size={18} />
                <span>Open now · Closes 10 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
