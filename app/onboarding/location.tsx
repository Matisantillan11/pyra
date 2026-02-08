import { requestForegroundPermissionsAsync } from "expo-location";
import { useRouter } from "expo-router";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, ThemedText } from "~/components/ui";

export default function Location() {
  const router = useRouter();

  const handleRequestUserLocation = async () => {
    const { status } = await requestForegroundPermissionsAsync();

    if (status === 'granted') {
      router.replace('/(tabs)');
    }
  }

  const handleNavigateToManualLocation = () => {
    router.push('/onboarding/manual');
  }

  return (
    <SafeAreaView edges={['top', 'bottom']} className="flex-1">
      <View className="relative h-full px-6">
        <ThemedText className="text-2xl font-bold px-6 mt-8 text-center">Alertas cerca tuyo</ThemedText>

        <View className="justify-center items-center mt-4">
          <ThemedText className="text-sm text-center">Usamos tu ubicación solo para avisarte sobre incendios o emergencias cerca tuyo. Si preferís, podés elegir una ubicación general.</ThemedText>
          <ThemedText className="text-sm text-center font-bold mt-4">Tu privacidad siempre es lo primero.</ThemedText>
        </View>

        <Image
          source={require("~/assets/images/location.png")}
          className="w-full h-96 rounded-3xl object-cover mt-10"
        />


        <View className="absolute bottom-6 left-6 right-6 gap-y-4">
          <Button onPress={handleRequestUserLocation} className="bg-red-600">
            <ThemedText className="text-white font-bold">Habilitar ubicación</ThemedText>
          </Button>

          <Button variant="outline" onPress={handleNavigateToManualLocation} className="border-2 border-red-600 active:bg-red-600/30">
            <ThemedText className="text-red-600 font-bold">Elegir ubicación manualmente</ThemedText>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  )
}
