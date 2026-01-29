import ClusteredMapView from 'react-native-map-clustering';
import type { Region } from 'react-native-maps';
import ClusterMarker from './cluster-marker';
import type { ClusteredMapProps, ClusterProps } from './types';
import { ARGENTINA_INITIAL_REGION } from './types';

export default function ClusteredMap({
  children,
  ref,
  showsUserLocation = true,
  initialRegion = ARGENTINA_INITIAL_REGION,
  radius = 50,
  maxZoom = 20,
  minZoom = 1,
  minPoints = 2,
  extent = 512,
  nodeSize = 64,
  preserveClusterPressBehavior = true,
  onRegionChangeComplete,
}: ClusteredMapProps) {
  const renderCluster = (cluster: ClusterProps) => {
    return (
      <ClusterMarker
        key={`cluster-${cluster.id}`}
        cluster={cluster}
        onPress={cluster.onPress}
      />
    );
  };

  const handleRegionChangeComplete = (region: Region) => {
    onRegionChangeComplete?.(region);
  };

  return (
    <ClusteredMapView
      ref={ref}
      style={{ position: 'relative', width: '100%', height: '100%' }}
      initialRegion={initialRegion}
      showsUserLocation={showsUserLocation}
      showsMyLocationButton
      radius={radius}
      maxZoom={maxZoom}
      minZoom={minZoom}
      minPoints={minPoints}
      extent={extent}
      nodeSize={nodeSize}
      preserveClusterPressBehavior={preserveClusterPressBehavior}
      renderCluster={renderCluster}
      onRegionChangeComplete={handleRegionChangeComplete}
    >
      {children}
    </ClusteredMapView>
  );
}
