import { createMemoryStyles } from "@/utils";
import { Text } from "react-native";
import { useTheme } from "react-native-paper";
import RegisterForm from "../components/forms/RegisterForm";
import { AuthScreenLayout } from "./AuthScreenLayout";
export default function Index() {
	const theme = useTheme();
	const styles = createMemoryStyles(theme);
	return (
		<AuthScreenLayout>
			<Text style={[styles.title]}>Sign up</Text>
			<RegisterForm />
		</AuthScreenLayout>
	);
}
