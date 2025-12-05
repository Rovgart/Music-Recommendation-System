
import { createMemoryStyles } from "@/utils";
import { useState } from "react";
import { Text, View } from "react-native";
import { useTheme } from "react-native-paper";
export default function Index() {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const styles = createMemoryStyles(theme);
  const unfoldingMenuHandler = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <View style={[styles.container, { height: 400 }]}>
      <View
        style={{
          gap: 24,
          marginTop: 12,
        }}
      >
        <Text style={styles.title}>Welcome again</Text>
      </View>
    </View>
  );
}
