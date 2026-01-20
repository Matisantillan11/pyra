import { View } from "react-native";
import { Button, ThemedText } from "~/components/ui";
import CardCloudIcon from "./card-cloud-icon";
import CardDangerIcon from "./card-danger-icon";
import CardFireIcon from "./card-fire-icon";

export default function Card({ title, type }: { title: string, type: 'fire' | 'cloud' | 'danger' }) {
  const renderIcon = () => {
    switch (type) {
      case 'fire':
        return <CardFireIcon />;
      case 'cloud':
        return <CardCloudIcon />;
      case 'danger':
        return <CardDangerIcon />;
      default:
        return <CardFireIcon />;
    }
  }

  return (
    <View className="p-4 shadow-lg rounded-lg gap-4">
      {renderIcon()}

      <View>
        <ThemedText className="text-xl font-bold">{title}</ThemedText>

        <View className="flex-row items-center gap-1">
          <ThemedText className="text-xs font-medium text-gray-500">Hace 4 min</ThemedText>
          <View className="h-1 w-1 bg-black/40 rounded-full" />
          <ThemedText className="text-xs font-bold text-gray-500">KM 12, Av Bustillo</ThemedText>
        </View>
      </View>

      <ThemedText className="text-sm font-medium text-gray-500">
        Clima de humo negro densa visible desde la ruta, lado sur. Parece estar cerca de las viviendas.
      </ThemedText>

      <View className="flex-row items-center gap-1">
        <Button className="bg-green-700/80 w-1/2">
          <ThemedText className="text-sm font-medium text-white">Confirmar</ThemedText>
        </Button>

        <Button className="bg-red-700/80 w-1/2">
          <ThemedText className="text-sm font-medium text-white">No lo veo</ThemedText>
        </Button>
      </View>
    </View>
  )
}
