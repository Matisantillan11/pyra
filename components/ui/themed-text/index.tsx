import { Text, TextProps } from "react-native";
import { cn } from "~/utils/tailwind";

export default function ThemedText(props: TextProps) {
  return <Text className={cn('text-black dark:text-white font-montserrat-regular text-sm', props.className)}>{props.children}</Text>;
}
