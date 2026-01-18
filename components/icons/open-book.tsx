import { BookOpen02Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from "@hugeicons/react-native";
import { IconProps } from "./types";

export default function OpenBookIcon({ size = 24, color = "black", strokeWidth = 1.5 }: IconProps) {
  return <HugeiconsIcon icon={BookOpen02Icon} size={size} color={color} strokeWidth={strokeWidth} />;
}
