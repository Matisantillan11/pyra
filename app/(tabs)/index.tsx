import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { router } from 'expo-router';
import { useCallback, useRef } from 'react';
import { ActivityIndicator, View } from 'react-native';
import type MapView from 'react-native-maps';
import { ReportButton } from '~/components';
import { FireIcon } from '~/components/icons';
import { PersonalDataBottomSheet } from '~/components/personal-data-bottom-sheet';
import { ThemedText } from '~/components/ui';
import { useFires } from '~/lib/firms/hooks';
import { ClusteredMap, MapMarker } from '~/lib/map';
import { getActiveFiresLength, getMarkerType } from './utils';


export default function MapScreen() {
  const mapRef = useRef<MapView>(null);
  const { fires, isLoading } = useFires();

  const activeFiresLength = getActiveFiresLength(fires);

  const handleReportPress = () => {
    router.push('/report');
  };

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef?.current?.present();
  }, []);

  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef?.current?.dismiss();
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <View className="h-full items-center justify-center relative">
      <ClusteredMap
        ref={mapRef}
        radius={60}
        minPoints={2}
        maxZoom={16}
      >
        {fires.map((fire, index) => (
          <MapMarker
            key={`fire-${fire.latitude}-${fire.longitude}-${index}`}
            type={getMarkerType(fire.intensity)}
            coordinate={{
              latitude: fire.latitude,
              longitude: fire.longitude,
            }}
            title="Fire detected"
            description={`${fire.dateTime} - Confidence: ${fire.confidence}`}
          />
        ))}
      </ClusteredMap>

      <View className="absolute top-16 bg-black/90 px-4 py-2 rounded-2xl flex-row items-center gap-2">
        <View className="flex-row items-center gap-2">
          <FireIcon size={24} color="red" strokeWidth={2} />
          <ThemedText className="text-white">
            <ThemedText className='text-red-600 font-bold'>{activeFiresLength} </ThemedText>
            focos activos
          </ThemedText>
        </View>
      </View>

      {isLoading && (
        <View className="absolute top-100 bg-transparent px-4 py-2 rounded-full">
          <ActivityIndicator size="small" />
        </View>
      )}

      <ReportButton onPress={handlePresentModalPress} />

      <PersonalDataBottomSheet
        ref={bottomSheetModalRef}
        onClose={handleCloseModalPress}
        handleSheetChanges={handleSheetChanges}
      />
    </View>
  );
}
