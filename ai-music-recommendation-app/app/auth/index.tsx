import { createMemoryStyles } from "@/utils";
import { Text, View } from "react-native";
import { useTheme } from "react-native-paper";
import RegisterForm from "../components/forms/RegisterForm";
export default function Index() {
	const theme = useTheme();
	const styles = createMemoryStyles(theme);
	return (
		<View style={[styles.loginContainer]}>
			<Text style={[styles.title]}>Sign up</Text>
			<RegisterForm />
		</View>
	);
}
