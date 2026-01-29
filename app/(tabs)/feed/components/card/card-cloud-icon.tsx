import { View } from "react-native";
import { CloudIcon } from "~/components/icons";

export default function CardCloudIcon() {
  return (
    <View className="h-12 w-12 bg-gray-200/60 dark:bg-gray-800/40 flex-row items-center justify-center gap-1 rounded-lg">
      <CloudIcon color="gray" />
    </View>
  )
}
