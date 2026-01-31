export interface WorkplacePlace {
  id: string;
  name: string;
  type: 'cafe' | 'library' | 'workspace';
  coordinates: {
    lat: number;
    lng: number;
  };
  address?: string;
  description?: string;
  wifiAvailable?: boolean;
  powerOutlets?: boolean;
}
