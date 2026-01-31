import { useState, useEffect, Suspense, lazy } from "react";
import PlacesDrawer from "../components/Map/PlacesDrawer";
import mockWorkplaces from "../data/mockWorkplaces.json";
import type { WorkplacePlace } from "../types/workplace.d";

const LazyWorkplaceMap = lazy(() => import("../components/Map/WorkplaceMap"));

export function meta() {
  return [
    { title: "Anyseat - Find Your Workspace" },
    { name: "description", content: "Find free library rooms, cafes, and coworking spaces." },
  ];
}

export default function App() {
  const [places] = useState<WorkplacePlace[]>(mockWorkplaces as WorkplacePlace[]);
  const [selectedPlaceId, setSelectedPlaceId] = useState<string | null>(null);
  const defaultPosition: [number, number] = [51.505, -0.09]; // Default to London - This will now be handled internally by LazyWorkplaceMap for initial position
  const defaultZoom = 13; // This will now be handled internally by LazyWorkplaceMap for initial position

  useEffect(() => {
    if (selectedPlaceId) {
      // Logic to center map on selected place will be handled by WorkplaceMap
    }
  }, [selectedPlaceId]);

  const handleSelectPlace = (id: string | null) => {
    setSelectedPlaceId(id);
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {typeof window !== 'undefined' ? (
        <Suspense fallback={
          <div className="flex items-center justify-center h-full w-full bg-gray-100 text-gray-500">
            Loading map...
          </div>
        }>
          <LazyWorkplaceMap
            places={places}
            selectedPlaceId={selectedPlaceId}
            onSelectPlace={handleSelectPlace}
          />
        </Suspense>
      ) : (
        <div className="flex items-center justify-center h-full w-full bg-gray-100 text-gray-500">
          Loading map on client...
        </div>
      )}
      <PlacesDrawer
        places={places}
        selectedPlaceId={selectedPlaceId}
        onSelectPlace={handleSelectPlace}
      />
    </div>
  );
}
