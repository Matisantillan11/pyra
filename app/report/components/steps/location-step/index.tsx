import { useState } from 'react';
import { View } from 'react-native';
import { LocationIcon } from '~/components/icons';
import { Input, ThemedText } from '~/components/ui';
import { Map } from '~/lib/map';
import { Location } from '../../../types';

interface LocationStepProps {
  location: Location | null;
  onLocationSelect: (location: Location) => void;
}

export function LocationStep({ location, onLocationSelect }: LocationStepProps) {
  const [searchQuery, setSearchQuery] = useState(location?.address || '');

  const handleLocationConfirm = () => {
    onLocationSelect({
      address: searchQuery,
      coordinates: {
        latitude: -41.1335,
        longitude: -71.3103,
      },
    });
  };

  return (
    <Map>
      <View className="bg-transparent px-6 py-3 flex-row items-center">
        <Input
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Buscar calle, zona o referencia..."
          className="flex-1 "
        />
      </View>

      <View className="absolute bottom-45 left-0 right-0 px-6 pb-6 gap-4">
        <View className="bg-white dark:bg-dark-card rounded-xl p-4 shadow-lg">
          <View className="flex-row items-center">
            <View className="w-10 h-10 bg-red-600 rounded-full items-center justify-center mr-3">
              <LocationIcon size={20} color="white" strokeWidth={2} />
            </View>
            <View className="flex-1">
              <ThemedText className="text-xs text-gray-500 dark:text-gray-400 font-montserrat-medium uppercase">
                Ubicación Aproximada
              </ThemedText>
              <ThemedText className="text-sm font-montserrat-semibold text-gray-900 dark:text-white mt-1">
                {searchQuery || 'Av. Exequiel Bustillo Km 12.5'}
              </ThemedText>
              <ThemedText className="text-xs text-gray-500 dark:text-gray-400 font-montserrat-regular">
                San Carlos de Bariloche, Río Negro
              </ThemedText>
            </View>
          </View>
        </View>
      </View>
    </Map>
  );
}
