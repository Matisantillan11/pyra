import { Switch } from "react-native";
import { ToggleProps } from "./types";

export default function Toggle({ value, onPress }: ToggleProps) {
  const handleOnValueChange = (newValue: boolean) => {
    onPress(newValue);
  }

  return (
    <Switch
      value={value}
      onValueChange={handleOnValueChange}
      className="m-2"
      thumbColorClassName="accent-white"
      trackColorOnClassName="accent-blue-500 dark:accent-blue-700"
      trackColorOffClassName="accent-gray-300 dark:accent-gray-700"
      ios_backgroundColorClassName="accent-gray-300"
    />
  )
}
