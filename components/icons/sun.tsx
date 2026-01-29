import { Sun03Icon as SunHugeiconsIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from "@hugeicons/react-native";
import { IconProps } from "./types";

export default function SunIcon({ size = 24, color = "black", strokeWidth = 1.5, className }: IconProps) {
  return <HugeiconsIcon className={className} icon={SunHugeiconsIcon} size={size} color={color} strokeWidth={strokeWidth} />;
}
