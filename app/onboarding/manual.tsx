import { useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import { LocationIcon } from "~/components/icons";
import { Button, Input, ThemedText } from "~/components/ui";
import { Map } from "~/lib/map";
import { cn } from "~/utils/tailwind";

export default function ManualLocation() {
  const [searchQuery, setSearchQuery] = useState('');

  const router = useRouter();
  const isAddressSelected = searchQuery.length > 10;

  const navigateToHome = () => {
    router.replace('/(tabs)');
  }

  return (
    <Map>
      <View className="w-full bg-transparent mt-20 px-6">
        <Input
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Buscar calle, zona o referencia..."
          className="w-full"
        />
      </View>

      <View className={cn("absolute bottom-10 left-0 right-0 px-6 pb-6 gap-4 transition-transform duration-1000 ease-in-out",
        isAddressSelected ? 'translate-y-6' : 'translate-y-100'
      )}>
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

        <Button onPress={navigateToHome} className="w-full bg-red-600">
          <ThemedText className="text-white font-bold">Continuar</ThemedText>
        </Button>
      </View>
    </Map>
  )

}
