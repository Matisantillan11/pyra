import { View } from "react-native";
import { FireIcon } from "~/components/icons";

export default function CardFireIcon() {
  return (
    <View className="h-12 w-12 bg-red-200/60 flex-row items-center justify-center gap-1 rounded-lg">
      <FireIcon color="red" />
    </View>
  )
}
