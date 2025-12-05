
import { createMemoryStyles } from "@/utils";
import { Text, View } from "react-native";
import { useTheme } from "react-native-paper";
export default function Login() {
  const theme  = useTheme();
  const styles = createMemoryStyles(theme);
  return (
    <View style={[styles.loginContainer]}>
      <Text style={[styles.title]}>Sign In</Text>
    </View>
  );
}
