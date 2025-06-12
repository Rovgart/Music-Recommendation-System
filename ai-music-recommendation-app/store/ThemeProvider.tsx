import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Appearance, ColorSchemeName } from "react-native";

// Example usage in a component
import { StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";

// Define your theme colors
export const lightTheme = {
  primary: "#007AFF",
  secondary: "#5856D6",
  background: "#FFFFFF",
  surface: "#F2F2F7",
  text: "#000000",
  textSecondary: "#8E8E93",
  border: "#C6C6C8",
  error: "#FF3B30",
  success: "#34C759",
  warning: "#FF9500",
};

export const darkTheme = {
  primary: "#0A84FF",
  secondary: "#5E5CE6",
  background: "#000000",
  surface: "#1C1C1E",
  text: "#FFFFFF",
  textSecondary: "#8E8E93",
  border: "#38383A",
  error: "#FF453A",
  success: "#30D158",
  warning: "#FF9F0A",
};

export type Theme = typeof lightTheme;

interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (theme: "light" | "dark" | "system") => void;
  themeMode: "light" | "dark" | "system";
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<"light" | "dark" | "system">(
    "system"
  );
  const [systemTheme, setSystemTheme] = useState<ColorSchemeName>(
    Appearance.getColorScheme()
  );

  // Determine current theme based on mode
  const isDark =
    themeMode === "system" ? systemTheme === "dark" : themeMode === "dark";

  const theme = isDark ? darkTheme : lightTheme;

  // Load saved theme preference
  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem("theme");
        if (savedTheme && ["light", "dark", "system"].includes(savedTheme)) {
          setThemeMode(savedTheme as "light" | "dark" | "system");
        }
      } catch (error) {
        console.error("Error loading theme:", error);
      }
    };
    loadTheme();
  }, []);

  // Listen to system theme changes
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setSystemTheme(colorScheme);
    });

    return () => subscription?.remove();
  }, []);

  // Save theme preference
  useEffect(() => {
    const saveTheme = async () => {
      try {
        await AsyncStorage.setItem("theme", themeMode);
      } catch (error) {
        console.error("Error saving theme:", error);
      }
    };
    saveTheme();
  }, [themeMode]);

  const toggleTheme = () => {
    setThemeMode((current) => (current === "dark" ? "light" : "dark"));
  };

  const setTheme = (newTheme: "light" | "dark" | "system") => {
    setThemeMode(newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isDark,
        toggleTheme,
        setTheme,
        themeMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeExample: React.FC = () => {
  const { theme, isDark, toggleTheme, setTheme, themeMode } = useTheme();

  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Theme Settings</Text>

      <View style={styles.setting}>
        <Text style={styles.settingText}>Dark Mode</Text>
        <Switch
          value={isDark}
          onValueChange={toggleTheme}
          trackColor={{ false: theme.border, true: theme.primary }}
          thumbColor={isDark ? theme.surface : theme.background}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, themeMode === "light" && styles.activeButton]}
          onPress={() => setTheme("light")}
        >
          <Text
            style={[
              styles.buttonText,
              themeMode === "light" && styles.activeButtonText,
            ]}
          >
            Light
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, themeMode === "dark" && styles.activeButton]}
          onPress={() => setTheme("dark")}
        >
          <Text
            style={[
              styles.buttonText,
              themeMode === "dark" && styles.activeButtonText,
            ]}
          >
            Dark
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, themeMode === "system" && styles.activeButton]}
          onPress={() => setTheme("system")}
        >
          <Text
            style={[
              styles.buttonText,
              themeMode === "system" && styles.activeButtonText,
            ]}
          >
            System
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.preview}>
        <Text style={styles.previewTitle}>Preview</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Sample Card</Text>
          <Text style={styles.cardDescription}>
            This is how your content will look with the current theme.
          </Text>
          <TouchableOpacity style={styles.cardButton}>
            <Text style={styles.cardButtonText}>Action Button</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      color: theme.text,
      marginBottom: 30,
      textAlign: "center",
    },
    setting: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: theme.surface,
      padding: 16,
      borderRadius: 12,
      marginBottom: 20,
    },
    settingText: {
      fontSize: 16,
      color: theme.text,
      fontWeight: "500",
    },
    buttonContainer: {
      flexDirection: "row",
      marginBottom: 30,
      borderRadius: 12,
      backgroundColor: theme.surface,
      padding: 4,
    },
    button: {
      flex: 1,
      padding: 12,
      alignItems: "center",
      borderRadius: 8,
    },
    activeButton: {
      backgroundColor: theme.primary,
    },
    buttonText: {
      fontSize: 14,
      fontWeight: "600",
      color: theme.textSecondary,
    },
    activeButtonText: {
      color: theme.background,
    },
    preview: {
      flex: 1,
    },
    previewTitle: {
      fontSize: 18,
      fontWeight: "600",
      color: theme.text,
      marginBottom: 16,
    },
    card: {
      backgroundColor: theme.surface,
      padding: 20,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: theme.border,
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: "600",
      color: theme.text,
      marginBottom: 8,
    },
    cardDescription: {
      fontSize: 14,
      color: theme.textSecondary,
      lineHeight: 20,
      marginBottom: 16,
    },
    cardButton: {
      backgroundColor: theme.primary,
      padding: 12,
      borderRadius: 8,
      alignItems: "center",
    },
    cardButtonText: {
      color: theme.background,
      fontWeight: "600",
      fontSize: 14,
    },
  });

// App.tsx usage example
export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ThemeExample />
    </ThemeProvider>
  );
};
