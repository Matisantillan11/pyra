import { View } from "react-native";
import { Marker } from "react-native-maps";
import { AlertIcon, CloudIcon, FireIcon } from "~/components/icons";
import { cn } from "~/utils/tailwind";
import type { MapMarkerProps, MarkerType } from "./types";
import {
  markerInnerVariants,
  markerMiddleVariants,
  markerOuterVariants,
} from "./variants";

const ICON_SIZES = {
  default: 20,
  sm: 16,
  lg: 24,
} as const;

const getMarkerIcon = (type: MarkerType, size: "default" | "sm" | "lg" = "default") => {
  const iconSize = ICON_SIZES[size];

  switch (type) {
    case "fire":
      return <FireIcon size={iconSize} color="white" strokeWidth={2} />;
    case "smoke":
      return <CloudIcon size={iconSize} color="white" strokeWidth={2} />;
    case "risk":
      return <AlertIcon size={iconSize} color="white" strokeWidth={2} />;
  }
};

export default function MapMarker({
  coordinate,
  title,
  description,
  type = "fire",
  size = "default",
  onPress,
}: MapMarkerProps) {
  return (
    <Marker
      coordinate={coordinate}
      title={title}
      description={description}
      onPress={onPress}
      tracksViewChanges
    >
      <View className={cn(markerOuterVariants({ type, size }))}>
        <View className={cn(markerMiddleVariants({ type, size }))}>
          <View className={cn(markerInnerVariants({ type, size }))}>
            {getMarkerIcon(type ?? "fire", size ?? "default")}
          </View>
        </View>
      </View>
    </Marker>
  );
}
