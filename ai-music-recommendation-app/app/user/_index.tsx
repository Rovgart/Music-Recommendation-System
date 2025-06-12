import UserInfo from "@/components/organisms/UserInfo";
import { useTheme } from "@/store/ThemeProvider";
import { createMemoryStyles } from "@/utils";
import { View } from "react-native";

export default function Index() {
  const { theme } = useTheme();
  const styles = createMemoryStyles(theme);
  return (
    <View style={[styles.container]}>
      <UserInfo styles={styles} />
    </View>
  );
}
