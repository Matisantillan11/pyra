import { View } from "react-native";
import { ThemedText } from "~/components/ui";
import Card from "../card";

export default function RealTimeFeed() {
  return (
    <View>
      <View className="flex-row items-center gap-2 my-2">
        <ThemedText className="text-sm font-bold uppercase text-gray-500 dark:text-gray-400">Reportes de la comunidad</ThemedText>
      </View>

      <View className="gap-4">
        <Card title="Humo Visible" type="fire" />
        <Card title="Cables caidos" type="danger" />
        <Card title="Humo Visible" type="cloud" />
      </View>
    </View>
  )
}
