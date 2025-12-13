import { useAuthStore } from "@/store/authStore";
import { useEffect } from "react";
import { View } from "react-native";
import { useTheme } from "react-native-paper";
import BottomNav from "./components/navigation/BottomNavigation";
export default function Index() {
	const initAuthListener = useAuthStore((s) => s.initAuthListener);
	useEffect(() => {
		const unsubscribe = initAuthListener();
		return unsubscribe;
	}, [initAuthListener]);
	const theme = useTheme();

	return (
		<View
			style={{
				flex: 1,
				backgroundColor: theme.colors.primary,
				// alignItems: "center",
			}}
		>
			<BottomNav />
		</View>
	);
}
