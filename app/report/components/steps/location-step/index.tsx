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
          placeholderTextColor="#9CA3AF"
          className="flex-1 text-gray-900 font-montserrat-regular text-sm bg-white rounded-xl"
        />
      </View>

      <View className="absolute bottom-60 left-0 right-0 px-6 pb-6 gap-4">
        <View className="bg-white rounded-xl p-4 shadow-lg">
          <View className="flex-row items-center">
            <View className="w-10 h-10 bg-red-600 rounded-full items-center justify-center mr-3">
              <LocationIcon size={20} color="white" strokeWidth={2} />
            </View>
            <View className="flex-1">
              <ThemedText className="text-xs text-gray-500 font-montserrat-medium uppercase">
                Ubicación Aproximada
              </ThemedText>
              <ThemedText className="text-sm font-montserrat-semibold text-gray-900 mt-1">
                {searchQuery || 'Av. Exequiel Bustillo Km 12.5'}
              </ThemedText>
              <ThemedText className="text-xs text-gray-500 font-montserrat-regular">
                San Carlos de Bariloche, Río Negro
              </ThemedText>
            </View>
          </View>
        </View>
      </View>
    </Map>
    /*   <View className="relative h-full">
        <View className="px-6 py-4 flex-row items-center">
          <TouchableOpacity onPress={onBack} className="mr-3" activeOpacity={0.7}>
            <ArrowLeftIcon size={24} color="#374151" strokeWidth={2} />
          </TouchableOpacity>
          <View>
            <ThemedText className="text-sm text-gray-500 font-montserrat-medium">
              Atrás
            </ThemedText>
            <ThemedText className="text-xl font-montserrat-bold text-gray-900">
              Reportar Fuego
            </ThemedText>
          </View>
        </View>
  
        <View className="px-6 py-2">
          <ThemedText className="text-xs text-gray-500 font-montserrat-medium uppercase">
            Paso 2 de 4
          </ThemedText>
          <ThemedText className="text-xs text-gray-400 font-montserrat-regular mt-1">
            UBICACIÓN DEL INCENDIO
          </ThemedText>
        </View> 
        
        <View className="bg-gray-200 mx-6 my-4 rounded-2xl overflow-hidden">
         <View className="absolute top-4 right-4 gap-2">
            <TouchableOpacity
              className="w-10 h-10 bg-white rounded-full items-center justify-center shadow-lg"
              activeOpacity={0.7}
            >
              <ThemedText className="text-gray-700 font-bold">⊕</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity
              className="w-10 h-10 bg-white rounded-full items-center justify-center shadow-lg"
              activeOpacity={0.7}
            >
              <ThemedText className="text-gray-700 font-bold">⊖</ThemedText>
            </TouchableOpacity>
          </View> 
  
         
          <View className="absolute top-4 left-4 right-20">
            <View className="bg-white rounded-xl px-4 py-3 flex-row items-center shadow-lg">
              <TextInput
                value={searchQuery}
                onChangeText={setSearchQuery}
                placeholder="Buscar calle, zona o referencia..."
                placeholderTextColor="#9CA3AF"
                className="flex-1 text-gray-900 font-montserrat-regular text-sm"
              />
              <ThemedText className="text-gray-400 ml-2">🎤</ThemedText>
            </View>
          </View> 
  
          <View className="absolute bottom-4 left-4 right-4">
            <View className="bg-white rounded-xl p-4 shadow-lg">
              <View className="flex-row items-center">
                <View className="w-10 h-10 bg-red-600 rounded-full items-center justify-center mr-3">
                  <LocationIcon size={20} color="white" strokeWidth={2} />
                </View>
                <View className="flex-1">
                  <ThemedText className="text-xs text-gray-500 font-montserrat-medium uppercase">
                    Ubicación Aproximada
                  </ThemedText>
                  <ThemedText className="text-sm font-montserrat-semibold text-gray-900 mt-1">
                    {searchQuery || 'Av. Exequiel Bustillo Km 12.5'}
                  </ThemedText>
                  <ThemedText className="text-xs text-gray-500 font-montserrat-regular">
                    San Carlos de Bariloche, Río Negro
                  </ThemedText>
                </View>
              </View>
            </View>
          </View> 
        </View>
  
       
        
      </View> */
  );
}
