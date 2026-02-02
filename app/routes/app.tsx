import { useState, Suspense, lazy } from "react";
import Places from "../components/Places";
import mockPlaces from "../data/mockPlaces.json";
import type { Place } from "../types/place";
import FilterBar from "../components/FilterBar";

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

  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [wifiAvailable, setWifiAvailable] = useState<boolean>(false);
  const [powerOutlets, setPowerOutlets] = useState<boolean>(false);

  const allTypes = [...new Set(places.map((p) => p.type))];

  const handleTypeChange = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const filteredPlaces = places.filter(place => {
    if (selectedTypes.length > 0 && !selectedTypes.includes(place.type)) {
      return false;
    }
    if (wifiAvailable && !place.wifiAvailable) {
      return false;
    }
    if (powerOutlets && !place.powerOutlets) {
      return false;
    }
    return true;
  });

  const handleSelectPlace = (id: string | null) => {
    setSelectedPlaceId(id);
  };

  return (
    <main className="relative grid grid-cols-2 gap-9 p-9">
      <div className="space-y-9">
        <FilterBar
          types={allTypes}
          selectedTypes={selectedTypes}
          onTypeChange={handleTypeChange}
          wifiAvailable={wifiAvailable}
          onWifiChange={setWifiAvailable}
          powerOutlets={powerOutlets}
          onPowerOutletsChange={setPowerOutlets}
        />
        <Places
          places={filteredPlaces}
          selectedPlaceId={selectedPlaceId}
          onSelectPlace={handleSelectPlace}
        />
      </div>
      <div className="overflow-hidden rounded-2xl sticky top-[calc(65px+var(--spacing)*8)] h-[calc(100vh-65px-var(--spacing)*8*2)]">
        {typeof window !== 'undefined' ? (
          <Suspense fallback={<MapLoader />}>
            <LazyPlaceMap
              places={filteredPlaces}
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
