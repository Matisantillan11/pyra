import { View } from "react-native";
import { AsteriskIcon } from "~/components/icons";
import { ThemedText } from "~/components/ui";
import { EMERGENCY_BUTTON_DATA } from "./emergency-button/constants";

import EmergencyButton from "./emergency-button";

export default function EmergencyCallsSection() {
  return (
    <View className="px-2">
      <View className="flex-row items-center gap-2 my-2">
        <AsteriskIcon color='red' strokeWidth={3} size={20} />
        <ThemedText className="text-sm font-bold uppercase">Números de emergencia</ThemedText>
      </View>

      <View className="gap-2">
        {EMERGENCY_BUTTON_DATA.map((emergency) => (
          <EmergencyButton key={emergency.id} emergency={emergency} />
        ))}
      </View>
    </View>
  )
}
