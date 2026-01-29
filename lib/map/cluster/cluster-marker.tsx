import { Text, View } from 'react-native';
import { Marker } from 'react-native-maps';
import { cn } from '~/utils/tailwind';
import type { ClusterProps } from './types';

type ClusterMarkerProps = {
  cluster: ClusterProps;
  onPress: () => void;
};

export default function ClusterMarker({ cluster, onPress }: ClusterMarkerProps) {
  const { geometry, properties } = cluster;
  const { point_count } = properties;

  const getClusterSize = () => {
    if (point_count < 10) return { outer: 'h-16 w-16', inner: 'h-10 w-10', text: 'text-sm' };
    if (point_count < 50) return { outer: 'h-20 w-20', inner: 'h-12 w-12', text: 'text-base' };
    if (point_count < 100) return { outer: 'h-24 w-24', inner: 'h-14 w-14', text: 'text-lg' };
    return { outer: 'h-28 w-28', inner: 'h-16 w-16', text: 'text-xl' };
  };

  const sizes = getClusterSize();

  return (
    <Marker
      coordinate={{
        longitude: geometry.coordinates[0],
        latitude: geometry.coordinates[1],
      }}
      tracksViewChanges={false}
      onPress={onPress}
    >
      <View className={cn(sizes.outer, 'rounded-full bg-red-500/20 items-center justify-center')}>
        <View className={cn(sizes.inner, 'rounded-full bg-red-500 items-center justify-center shadow-lg')}>
          <Text className={cn(sizes.text, 'font-bold text-white -mt-1')}>
            {point_count}
          </Text>
        </View>
      </View>
    </Marker>
  );
}
