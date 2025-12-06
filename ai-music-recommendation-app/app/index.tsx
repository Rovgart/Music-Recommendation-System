import { View } from "react-native";
import { useTheme } from "react-native-paper";
import BottomNav from "./components/navigation/BottomNavigation";
export default function Index() {
	const theme = useTheme();

	return (
		<View
			style={{
				flex: 1,
				backgroundColor: theme.colors.background,
				// alignItems: "center",
			}}
		>
			<BottomNav />
		</View>
	);
}
