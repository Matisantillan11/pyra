import { DefaultTheme } from "@react-navigation/native";
import { Stack } from 'expo-router';
import { useTheme } from "~/lib/theme";
import { DarkTheme } from "~/lib/theme/dark-theme";

export default function OnboardingLayout() {
  const { isDark } = useTheme();

  return (
    <Stack screenOptions={{
      contentStyle: {
        backgroundColor: isDark
          ? DarkTheme.colors.background
          : DefaultTheme.colors.background
      },
      headerShown: false
    }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="location" />
      <Stack.Screen name="manual" />
    </Stack>
  );
}
