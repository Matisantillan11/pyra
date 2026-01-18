import { Label, NativeTabs } from "expo-router/unstable-native-tabs";

export default function Tab({ name, icon, label }: { name: string, icon: React.ReactNode, label: string }) {
  return (
    <NativeTabs.Trigger name={name}>
      <Label>{label}</Label>
      {/* {icon} */}
    </NativeTabs.Trigger>
  );
}
