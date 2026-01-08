import { useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../global.css";
import BottomNav from "../components/navigation/BottomNavigation";
export default function Index() {
	const theme = useTheme();

	return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroundColor: theme.colors.primary,
				// alignItems: "center",
			}}
		>
			<BottomNav />
		</SafeAreaView>
	);
}
