import { View } from "react-native";
import { ArrowRightIcon, EditIcon } from "~/components/icons";
import { Button, ThemedText } from "~/components/ui";

export default function Privacy() {
  return (
    <View>
      <View className="flex-row items-center gap-2 my-2">
        <ThemedText className="text-sm font-bold uppercase text-gray-500 dark:text-gray-400">Perfil y privacidad</ThemedText>
      </View>

      <Button variant="ghost" className="py-2 w-full justify-start">
        <View className="w-full flex-row items-center justify-between">
          <View className="flex-row items-center gap-2">
            <View className="h-12 w-12 bg-gray-200/60 dark:bg-gray-700/60 flex-row items-center justify-center gap-1 rounded-full">
              <EditIcon color="gray" />
            </View>

            <ThemedText className="text-xs font-bold">Editar perfil</ThemedText>
          </View>

          <View>
            <ArrowRightIcon color="gray" size={20} />
          </View>
        </View>
      </Button>
    </View>
  )
}
