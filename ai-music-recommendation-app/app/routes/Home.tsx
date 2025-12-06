import { Text, View } from "react-native";
import { useTheme } from "react-native-paper";
import { GenerateForm } from "../components/forms/GenerateForm";

export default function Home() {
	const theme = useTheme();
	return (
		<View
			style={{
				flex: 1,
				// alignItems: "center",
				alignSelf: "center",
				gap: 24,
				padding: 12,
				// maxWidth: 700,
				width: "100%",
			}}
		>
			<Text
				style={{
					fontSize: 36,
					textAlign: "center",
					fontWeight: "bold",
					color: theme.colors.primary,
				}}
			>
				Welcome again
			</Text>

			<Text
				style={{
					fontSize: 18,
					textAlign: "center",
					fontWeight: "600",
					color: theme.colors.primary,
				}}
			>
				How are you feeling today ?
			</Text>

			<GenerateForm />
		</View>
	);
}
