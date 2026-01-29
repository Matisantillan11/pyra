import { DefaultTheme } from '@react-navigation/native';
import { Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs';
import { useTheme } from '~/lib/theme';
import { DarkTheme } from '~/lib/theme/dark-theme';

export default function TabLayout() {
  const { isDark } = useTheme();
  const screenOptions = {
    backgroundColor: isDark
      ? DarkTheme.colors.background
      : DefaultTheme.colors.background
  }

  return (
    <NativeTabs minimizeBehavior="onScrollDown">
      <NativeTabs.Trigger name="index">
        <Label>Map</Label>
        <Icon sf="map.fill" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="feed" options={screenOptions}>
        <Label>Feed</Label>
        <Icon sf="newspaper.fill" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="settings" options={screenOptions}>
        <Label>Settings</Label>
        <Icon sf="gear" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
