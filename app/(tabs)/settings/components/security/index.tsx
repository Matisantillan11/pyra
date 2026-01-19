import { View } from "react-native";
import { ArrowRightIcon, OpenBookIcon } from "~/components/icons";
import { Button, ThemedText } from "~/components/ui";

export default function Security() {
  return (
    <View className="my-4">
      <View className="flex-row items-center gap-2 my-2">
        <ThemedText className="text-sm font-bold uppercase text-gray-500">Seguridad</ThemedText>
      </View>

      <Button variant="ghost" className="py-2 w-full">
        <View className="flex-row items-center justify-between gap-2">
          <View className="w-12 h-12 bg-blue-500/10 rounded-full flex-row items-center justify-center">
            <OpenBookIcon color="blue" />
          </View>

          <View className="gap-1">
            <ThemedText className="text-xs font-bold">Que hacer en caso de un incendio?</ThemedText>
            <ThemedText className="text-xs text-gray-500">Guía de evacuación y primeros auxilios</ThemedText>
          </View>

          <View>
            <ArrowRightIcon color="gray" size={20} />
          </View>
        </View>
      </Button>
    </View>
  )
}
