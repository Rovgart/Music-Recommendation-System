import LoginForm from "@/components/organisms/LoginForm";
import { useTheme } from "@/store/ThemeProvider";
import { createMemoryStyles } from "@/utils";
import { Link } from "expo-router";
import { Text, View } from "react-native";
export default function Login() {
  const { theme } = useTheme();
  const styles = createMemoryStyles(theme);
  return (
    <View style={[styles.container]}>
      <LoginForm />
      <Link href={"/auth"}>
        <Text>Sign Up</Text>
      </Link>
    </View>
  );
}
