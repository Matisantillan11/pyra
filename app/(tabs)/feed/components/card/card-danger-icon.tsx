import { View } from "react-native";
import { AlertIcon } from "~/components/icons";

export default function CardDangerIcon() {
  return (
    <View className="h-12 w-12 bg-orange-200/60 flex-row items-center justify-center gap-1 rounded-lg">
      <AlertIcon color="orange" />
    </View>
  )
}
