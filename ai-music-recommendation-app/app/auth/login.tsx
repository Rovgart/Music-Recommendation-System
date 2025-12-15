import { createMemoryStyles } from "@/utils";
import { Text } from "react-native";
import { useTheme } from "react-native-paper";
import LoginForm from "../components/forms/LoginForm";
import { AuthScreenLayout } from "./AuthScreenLayout";
export default function Login() {
	const theme = useTheme();
	const styles = createMemoryStyles(theme);
	return (
		<AuthScreenLayout>
			<Text style={[styles.title]}>Sign In</Text>
			<LoginForm />
		</AuthScreenLayout>
	);
}
