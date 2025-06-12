import RegisterField from "@/components/organisms/RegisterField";
import { useTheme } from "@/store/ThemeProvider";
import { createMemoryStyles } from "@/utils";
import { Link } from "expo-router";
import { Text, View } from "react-native";
export default function Index() {
  const { theme } = useTheme();
  const styles = createMemoryStyles(theme);
  return (
    <View style={[styles.container]}>
      <Text style={[styles.title]}>Sign up</Text>
      <RegisterField />
      <Link href={"/auth/login"}>Sign In</Link>
    </View>
  );
}
