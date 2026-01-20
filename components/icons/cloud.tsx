import { CloudSlowWindIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from "@hugeicons/react-native";
import { IconProps } from "./types";

export default function CloudIcon({ size = 24, color = "black", strokeWidth = 1.5, className }: IconProps) {
  return <HugeiconsIcon className={className} icon={CloudSlowWindIcon} size={size} color={color} strokeWidth={strokeWidth} />;
}
