import { DefaultTheme, ThemeProvider as NavigationThemeProvider } from '@react-navigation/native';
import { ReactNode, useCallback } from 'react';
import { Uniwind, useUniwind } from 'uniwind';
import { DarkTheme } from './dark-theme';

type ThemeMode = 'light' | 'dark' | 'system';

export function useTheme() {
  const { theme, hasAdaptiveThemes } = useUniwind();

  const isDark = theme === 'dark';
  const themeMode: ThemeMode = hasAdaptiveThemes ? 'system' : theme;

  const setThemeMode = useCallback((mode: ThemeMode) => {
    Uniwind.setTheme(mode);
  }, []);

  return {
    isDark,
    themeMode,
    setThemeMode,
  };
}

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const { theme } = useUniwind();
  const isDark = theme === 'dark';

  return (
    <NavigationThemeProvider value={isDark ? DarkTheme : DefaultTheme}>
      {children}
    </NavigationThemeProvider>
  );
}
