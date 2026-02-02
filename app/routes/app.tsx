import { useState, useEffect, Suspense, lazy } from "react";
import Places from "../components/Places";
import mockPlaces from "../data/mockPlaces.json";
import type { Place } from "../types/place";

const LazyPlaceMap = lazy(() => import("../components/PlaceMap"));

export function meta() {
  return [
    { title: "Anyseat - Find Your Workspace" },
    { name: "description", content: "Find free library rooms, cafes, and coworking spaces." },
  ];
}

export default function App() {
  const [places] = useState<Place[]>(mockPlaces as Place[]);
  const [selectedPlaceId, setSelectedPlaceId] = useState<string | null>(null);

  useEffect(() => {
    if (selectedPlaceId) {}
  }, [selectedPlaceId]);

  const handleSelectPlace = (id: string | null) => {
    setSelectedPlaceId(id);
  };

  return (
    <main className="relative grid grid-cols-2 gap-9 p-9">
      <Places
        places={places}
        selectedPlaceId={selectedPlaceId}
        onSelectPlace={handleSelectPlace}
      />
      <div className="overflow-hidden rounded-2xl sticky top-[calc(65px+var(--spacing)*8)] h-[calc(100vh-65px-var(--spacing)*8*2)]">
        {typeof window !== 'undefined' ? (
          <Suspense fallback={<MapLoader />}>
            <LazyPlaceMap
              places={places}
              selectedPlaceId={selectedPlaceId}
              onSelectPlace={handleSelectPlace}
            />
          </Suspense>
        ) : <MapLoader />}
      </div>
    </main>
  );
}

function MapLoader() {
  return <div className="flex items-center justify-center h-full w-full bg-gray-100 text-gray-500">
    Loading map...
  </div>
}