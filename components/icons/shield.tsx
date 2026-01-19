export { Shield02Icon as ShieldIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from "@hugeicons/react-native";
import { IconProps } from "./types";
import { Shield02Icon } from '@hugeicons/core-free-icons';

export default function ShieldIcon({ size = 24, color = "black", strokeWidth = 1.5, className }: IconProps) {
  return <HugeiconsIcon className={className} icon={Shield02Icon} size={size} color={color} strokeWidth={strokeWidth} />;
}
