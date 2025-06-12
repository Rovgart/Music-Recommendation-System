import { useTheme } from "@/store/ThemeProvider";
import { createMemoryStyles } from "@/utils";
import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChangeText: (text: string) => void;
  error?: string;
  secureTextEntry?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
}

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  error,
  secureTextEntry = false,
  multiline = false,
  numberOfLines = 1,
}) => {
  const { theme } = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const styles = createMemoryStyles(theme);
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[
          styles.input,
          isFocused && styles.inputFocused,
          error && styles.inputError,
          multiline && styles.inputMultiline,
        ]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        secureTextEntry={secureTextEntry}
        multiline={multiline}
        numberOfLines={numberOfLines}
        placeholderTextColor="#8E8E93"
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};
