import { router } from 'expo-router';
import { useRef } from 'react';
import { View } from 'react-native';
import { ReportButton } from '~/components';
import { Map, MapMarker } from '~/lib/map';
import { MapView } from '~/lib/map/types';

export default function MapScreen() {
  const mapRef = useRef<MapView>(null);

  const handleReportPress = () => {
    router.push('/report');
  };

  return (
    <View className="h-full items-center justify-center relative">
      <Map ref={mapRef} >
        <MapMarker type="fire" coordinate={{ latitude: -27.42, longitude: -64.17 }} />
        <MapMarker type="smoke" size="sm" coordinate={{ latitude: -31.43, longitude: -55.18 }} />
        <MapMarker type="risk" size="lg" coordinate={{ latitude: -41.44, longitude: -70.19 }} />
      </Map>
      <ReportButton onPress={handleReportPress} />
    </View>
  );
}
