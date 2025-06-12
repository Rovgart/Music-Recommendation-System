import { StyleSheet } from "react-native";
import type { Theme } from "./store/ThemeProvider";
export const createMemoryStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      height: 100,
      flex: 1,
      backgroundColor: theme.background,
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      color: theme.text,
      marginBottom: 20,
      textAlign: "center",
    },
    warning: {
      backgroundColor: theme.warning,
      padding: 12,
      borderRadius: 8,
      marginBottom: 20,
      alignItems: "center",
    },
    warningText: {
      color: theme.background,
      fontSize: 14,
      fontWeight: "500",
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
    cardImage: {
      width: "100%",
      height: 150,
      borderRadius: 8,
      marginBottom: 12,
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
    },
    icon: {
      color: theme.textSecondary,
    },
    // ✅ Input styles
    label: {
      fontSize: 14,
      color: theme.text,
      marginBottom: 6,
    },
    input: {
      backgroundColor: theme.surface,
      borderWidth: 1,
      borderColor: theme.border,
      borderRadius: 8,
      paddingVertical: 10,
      paddingHorizontal: 12,
      fontSize: 16,
      color: theme.text,
    },
    inputFocused: {
      borderColor: theme.primary,
    },
    inputError: {
      borderColor: theme.error,
    },
    inputMultiline: {
      minHeight: 80,
      textAlignVertical: "top",
    },
    errorText: {
      color: theme.error,
      fontSize: 12,
      marginTop: 4,
    },
  });
