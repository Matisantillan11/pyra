import { ArrowLeft02Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from "@hugeicons/react-native";
import { IconProps } from "./types";

export default function ArrowLeftIcon({ size = 24, color = "black", strokeWidth = 1.5, className }: IconProps) {
  return <HugeiconsIcon className={className} icon={ArrowLeft02Icon} size={size} color={color} strokeWidth={strokeWidth} />;
}
