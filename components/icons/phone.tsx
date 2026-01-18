import { CallRinging04Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from "@hugeicons/react-native";
import { IconProps } from "./types";

export default function PhoneIcon({ size = 24, color = "black", strokeWidth = 1.5 }: IconProps) {
  return <HugeiconsIcon icon={CallRinging04Icon} size={size} color={color} strokeWidth={strokeWidth} />;
}
