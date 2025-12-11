import { createMemoryStyles } from "@/utils";
import { Text, View } from "react-native";
import { useTheme } from "react-native-paper";
import LoginForm from "../components/forms/LoginForm";
export default function Login() {
	const theme = useTheme();
	const styles = createMemoryStyles(theme);
	return (
		<View style={[styles.loginContainer]}>
			<Text style={[styles.title]}>Sign In</Text>
			<LoginForm />
		</View>
	);
}
