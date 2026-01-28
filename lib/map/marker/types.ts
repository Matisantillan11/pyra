import type { VariantProps } from "class-variance-authority";
import type { markerOuterVariants } from "./variants";

export type MarkerType = "fire" | "smoke" | "risk";
export type MarkerSize = "default" | "sm" | "lg";

export interface MapMarkerProps extends VariantProps<typeof markerOuterVariants> {
  coordinate: {
    latitude: number;
    longitude: number;
  };
  title?: string;
  description?: string;
  onPress?: () => void;
}
