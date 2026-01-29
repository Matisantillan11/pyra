import { type Theme, DarkTheme as RNDarkTheme } from "@react-navigation/native";
export const DarkTheme: Theme = {
  dark: true,
  colors: {
    ...RNDarkTheme.colors,
    background: '#1e1e1ecc',
  },
  fonts: RNDarkTheme.fonts,
};
