import { AlertCircleIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from "@hugeicons/react-native";
import { IconProps } from "./types";

export default function InfoIcon({ size = 24, color = "black", strokeWidth = 1.5 }: IconProps) {
  return <HugeiconsIcon icon={AlertCircleIcon} size={size} color={color} strokeWidth={strokeWidth} />;
}
