import GenerateComponent from "@/components/organisms/GenerateComponent";
import Header from "@/components/organisms/Header";
import { useTheme } from "@/store/ThemeProvider";
import { createMemoryStyles } from "@/utils";
import { Text, View } from "react-native";
export default function Index() {
  const { theme } = useTheme();

  const styles = createMemoryStyles(theme);

  return (
    <View style={[styles.container, { height: 400 }]}>
      <Header />
      <View
        style={{
          gap: 24,
          marginTop: 12,
        }}
      >
        <Text style={styles.title}>Welcome again</Text>
        <GenerateComponent />
      </View>
    </View>
  );
}
