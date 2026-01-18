import { Camera01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from "@hugeicons/react-native";
import { IconProps } from "./types";

export default function CameraIcon({ size = 24, color = "black", strokeWidth = 1.5 }: IconProps) {
  return <HugeiconsIcon icon={Camera01Icon} size={size} color={color} strokeWidth={strokeWidth} />;
}
