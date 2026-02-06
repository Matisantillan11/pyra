import { View } from "react-native";
import { ThemedText } from "../ui";

export function BottomSheetTitle() {
  return (
    <View>
      <ThemedText className="text-3xl font-bold">Ayudanos a ayudarte mejor!</ThemedText>
      <View className="mt-4 mb-4">
        <ThemedText className="text-xs text-gray-300 font-thin">Estos datos nos permiten que los brigadistas puedan contactarte rápido si necesitan más información sobre el foco.</ThemedText>
        <ThemedText className="text-xs text-gray-300 font-thin">Tu prioridad es nuestra prioridad y solo se utilizaran para este fin.</ThemedText>
      </View>
    </View>
  )
}
