import type { ReactNode } from 'react';
import type MapView from 'react-native-maps';
import type { Region } from 'react-native-maps';

export type { Region };

export type ClusterProps = {
  id: string;
  geometry: {
    coordinates: [number, number];
  };
  properties: {
    point_count: number;
    point_count_abbreviated: string;
  };
  onPress: () => void;
};

export type ClusteredMapProps = {
  children?: ReactNode;
  ref?: React.RefObject<MapView | null>;
  showsUserLocation?: boolean;
  initialRegion?: Region;
  radius?: number;
  maxZoom?: number;
  minZoom?: number;
  minPoints?: number;
  extent?: number;
  nodeSize?: number;
  preserveClusterPressBehavior?: boolean;
  onRegionChangeComplete?: (region: Region) => void;
};

/** Default initial region centered on Argentina */
export const ARGENTINA_INITIAL_REGION: Region = {
  latitude: -38.5,
  longitude: -63.5,
  latitudeDelta: 25,
  longitudeDelta: 20,
};
