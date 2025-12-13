import { createMemoryStyles } from "@/utils";
import { Text } from "react-native";
import { useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import RegisterForm from "../components/forms/RegisterForm";
export default function Index() {
	const theme = useTheme();
	const styles = createMemoryStyles(theme);
	return (
		<SafeAreaView style={[styles.loginContainer]}>
			<Text style={[styles.title]}>Sign up</Text>
			<RegisterForm />
		</SafeAreaView>
	);
}
