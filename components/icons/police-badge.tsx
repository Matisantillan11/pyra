import { PoliceBadgeIcon as PoliceBadgeHugeiconsIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from "@hugeicons/react-native";
import { IconProps } from "./types";

export default function PoliceBadgeIcon({ size = 24, color = "black", strokeWidth = 1.5 }: IconProps) {
  return <HugeiconsIcon icon={PoliceBadgeHugeiconsIcon} size={size} color={color} strokeWidth={strokeWidth} />;
}
