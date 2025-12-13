import { createMemoryStyles } from "@/utils";
import { Text } from "react-native";
import { useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Login() {
	const theme = useTheme();
	const styles = createMemoryStyles(theme);
	return (
		<SafeAreaView>
			<Text style={[styles.title]}>Sign In</Text>
		</SafeAreaView>
	);
}
