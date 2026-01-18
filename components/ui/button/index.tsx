import { TouchableOpacity } from "react-native";
import { cn } from "~/utils/tailwind";
import { ButtonProps } from "./types";
import { buttonVariants } from "./variants";

export default function Button({ children, className, variant, size, ...props }: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={() => console.log('Pressed')}
      activeOpacity={0.7}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </TouchableOpacity>
  )
}
