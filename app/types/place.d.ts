export interface Place {
  id: string;
  name: string;
  type: 'cafe' | 'library' | 'workspace';
  coordinates: {
    lat: number;
    lng: number;
  };
  address?: string;
  description?: string;
  images?: string[];
  wifiAvailable?: boolean;
  powerOutlets?: boolean;
}
