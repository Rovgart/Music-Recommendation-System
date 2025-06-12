import { Colors } from "./colors";
const { lightTheme, darkTheme } = Colors;
export const lightThemeMode = {
  primary: lightTheme.primary,
  secondary: lightTheme.secondary,
  background: lightTheme.background,
  surface: lightTheme.surface,
  text: lightTheme.text,
  textSecondary: lightTheme.textSecondary,
  border: lightTheme.border,
  error: lightTheme.error,
  success: lightTheme.success,
  warning: lightTheme.warning,
};
export type Theme = typeof lightTheme;

export const darkThemeMode = {
  primary: darkTheme.primary,
  secondary: darkTheme.secondary,
  background: darkTheme.background,
  surface: darkTheme.surface,
  text: darkTheme.text,
  textSecondary: darkTheme.textSecondary,
  border: darkTheme.border,
  error: darkTheme.error,
  success: darkTheme.success,
  warning: darkTheme.warning,
};
