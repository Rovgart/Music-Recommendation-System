import { MD3LightTheme as DefaultTheme, MD3DarkTheme } from "react-native-paper";
export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,

    primary: "#7C4DFF",            // energia / emocje
    onPrimary: "#FFFFFF",
    primaryContainer: "#EDE7FF",
    onPrimaryContainer: "#1B003A",

    secondary: "#00BFA5",          // balans
    onSecondary: "#FFFFFF",
    secondaryContainer: "#C9FFF4",
    onSecondaryContainer: "#002018",

    tertiary: "#FF9100",           // kreatywność
    onTertiary: "#000000",

    background: "#FDFBFF",
    surface: "#FFFFFF",
    surfaceVariant: "#E7E0EC",

    error: "#B3261E",
    onError: "#FFFFFF",

    outline: "#79747E",
    shadow: "#000000",
  },
};

 export const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,

    primary: "#D0BCFF",
    onPrimary: "#381E72",
    primaryContainer: "#4F378B",
    onPrimaryContainer: "#EADDFF",

    secondary: "#5EEAD4",
    onSecondary: "#003731",
    secondaryContainer: "#005048",
    onSecondaryContainer: "#C9FFF4",

    tertiary: "#FFB74D",
    onTertiary: "#3A1B00",

    background: "#121212",
    surface: "#1E1E1E",
    surfaceVariant: "#2A2A2A",

    error: "#F2B8B5",
    onError: "#601410",

    outline: "#938F99",
    shadow: "#000000",
  },
};