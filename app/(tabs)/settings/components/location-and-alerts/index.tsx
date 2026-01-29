import { View } from "react-native";
import { ArrowRightIcon, FireIcon, LocationIcon, NotificationIcon } from "~/components/icons";
import { Button, ThemedText, Toggle } from "~/components/ui";

export default function LocationAndAlerts() {
  return (
    <View className="rounded-lg">
      <View className="flex-row items-center gap-2 my-2">
        <ThemedText className="text-sm font-bold uppercase text-gray-500 dark:text-gray-400">Ubicación y alertas</ThemedText>
      </View>

      <View className="shadow-lg dark:shadow-white/10 ">
      <Button variant="ghost" className="py-2 w-full justify-start shadow-none">
        <View className="w-full flex-row items-center justify-between">
          <View className="flex-row items-center gap-2">
            <View className="h-12 w-12 bg-cyan-900/40 dark:bg-cyan-800/50 flex-row items-center justify-center gap-1 rounded-full">
              <LocationIcon color="white" />
            </View>

            <ThemedText className="text-xs font-bold">Mi zona</ThemedText>
          </View>

          <View className="flex-row items-center gap-2">
            <ThemedText className="text-xs font-medium text-gray-500 dark:text-gray-400">Bariloche</ThemedText>
            <ArrowRightIcon color="gray" size={20} />
          </View>
        </View>
      </Button>

      <Button variant="ghost" className="py-2 w-full justify-start shadow-none">
        <View className="w-full flex-row items-center justify-between">
          <View className="flex-row items-center gap-2">
            <View className="h-12 w-12 bg-orange-200/60 dark:bg-orange-800/40 flex-row items-center justify-center gap-1 rounded-full">
              <FireIcon color="orange" />
            </View>

            <ThemedText className="text-xs font-bold">Incendios cercanos</ThemedText>
          </View>

          <Toggle value={true} onPress={() => { }} />
        </View>
      </Button>

      <Button variant="ghost" className="py-2 w-full justify-start shadow-none">
        <View className="w-full flex-row items-center justify-between">
          <View className="flex-row items-center gap-2">
            <View className="h-12 w-12 bg-red-200/60 dark:bg-red-800/40 flex-row items-center justify-center gap-1 rounded-full">
              <NotificationIcon color="red" />
            </View>

            <ThemedText className="text-xs font-bold">Alertas oficiales</ThemedText>
          </View>

          <Toggle value={true} onPress={() => { }} />
        </View>
      </Button>
      </View>
    </View>
  )
}
