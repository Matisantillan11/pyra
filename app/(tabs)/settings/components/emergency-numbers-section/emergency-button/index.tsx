import * as Linking from "expo-linking";
import { Platform, View } from "react-native";
import { AmbulanceIcon, FireIcon, PhoneIcon, PoliceBadgeIcon, ShieldIcon } from "~/components/icons";
import { Button, ThemedText } from "~/components/ui";
import { cn } from "~/utils/tailwind";
import { EmergencyButtonProps } from "./types";
import { getEmergencyButtonBackground } from "./utils";

export default function EmergencyButton({ emergency }: EmergencyButtonProps) {
  const handleOpenPhone = () => {
    if (Platform.OS === 'android') {
      Linking.openURL(`tel:${emergency.number}`);
      return;
    }

    if (Platform.OS === 'ios') {
      Linking.openURL(`telprompt:${emergency.number}`)
      return;
    }
  }

  const getEmergencyIcon = (icon: string) => {
    switch (icon) {
      case 'fire':
        return <View className="w-12 h-12 bg-red-200/30 rounded-lg flex-row items-center justify-center">
          <FireIcon className="w-8 h-8" color="white" />
        </View>;
      case 'police':
        return <View className="w-12 h-12 bg-red-200/30 rounded-lg flex-row items-center justify-center">
          <PoliceBadgeIcon className="w-8 h-8" color="white" />
        </View>;
      case 'ambulance':
        return <View className="w-12 h-12 bg-red-200/30 rounded-lg flex-row items-center justify-center">
          <AmbulanceIcon className="w-8 h-8" color="white" />
        </View>;
      case 'shield':
        return <View className="w-12 h-12 bg-red-200/30 rounded-lg flex-row items-center justify-center">
          <ShieldIcon className="w-8 h-8" color="white" />
        </View>;
    }
  }

  return (
    <Button className={cn(getEmergencyButtonBackground(emergency.icon), "h-18 rounded-lg")} onPress={handleOpenPhone}>
      <View className="flex-row items-center justify-between gap-5">
        {getEmergencyIcon(emergency.icon)}

        <View className="flex-1">
          <ThemedText className="text-xs uppercase text-white/80">{emergency.name}</ThemedText>
          <ThemedText className="text-2xl text-white font-bold">{emergency.number}</ThemedText>
        </View>

        <View className="w-12 h-12 bg-white rounded-full flex-row items-center justify-center">
          <PhoneIcon className="w-8 h-8" />
        </View>

      </View>
    </Button>
  )
}
