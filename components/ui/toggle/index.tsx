import { useState } from "react";
import { Switch } from "react-native";
import { ToggleProps } from "./types";

export default function Toggle({ value, onPress }: ToggleProps) {
  const [isEnabled, setIsEnabled] = useState(value);

  const handleOnValueChange = (newValue: boolean) => {
    setIsEnabled(newValue);
    onPress(newValue);
  }

  return (
    <Switch
      value={isEnabled}
      onValueChange={handleOnValueChange}
      className="m-2"
      thumbColorClassName="accent-white"
      trackColorOnClassName="accent-blue-500 dark:accent-blue-400"
      trackColorOffClassName="accent-gray-300 dark:accent-gray-700"
      ios_backgroundColorClassName="accent-gray-300"
    />
  )
}
