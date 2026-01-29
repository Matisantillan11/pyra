import { View } from "react-native";
import { MoonIcon, SunIcon } from "~/components/icons";
import { Button, ThemedText, Toggle } from "~/components/ui";
import { useTheme } from "~/lib/theme";

export default function Appearance() {
  const { isDark, themeMode, setThemeMode } = useTheme();

  const handleToggle = (value: boolean) => {
    setThemeMode(value ? 'dark' : 'light');
  };

  return (
    <View className="rounded-lg">
      <View className="flex-row items-center gap-2 my-2">
        <ThemedText className="text-sm font-bold uppercase text-gray-500 dark:text-gray-400">Apariencia</ThemedText>
      </View>

      <Button variant="ghost" className="py-2 w-full justify-start shadow-lg dark:shadow-white/10 rounded-lg">
        <View className="w-full flex-row items-center justify-between">
          <View className="flex-row items-center gap-2">
            <View className="h-12 w-12 bg-orange-200/60 dark:bg-purple-800/30 flex-row items-center justify-center gap-1 rounded-full">
              {isDark ? <MoonIcon color="purple" strokeWidth={2} /> : <SunIcon color="orange" strokeWidth={2} />}
            </View>

            <View>
              <ThemedText className="text-xs font-bold">Modo oscuro</ThemedText>
              <ThemedText className="text-xs text-gray-500 dark:text-gray-400">
                {themeMode === 'system' ? 'Automático' : isDark ? 'Activado' : 'Desactivado'}
              </ThemedText>
            </View>
          </View>

          <Toggle value={isDark} onPress={handleToggle} />
        </View>
      </Button>
    </View>
  );
}
