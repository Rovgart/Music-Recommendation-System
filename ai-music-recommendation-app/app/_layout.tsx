import { useAuthStore } from "@/store/authStore";
import { darkTheme, lightTheme } from "@/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

const queryClient = new QueryClient();
export default function RootLayout() {
	const initAuthListener = useAuthStore((s) => s.initAuthListener);
	useEffect(() => {
		const unsubscribe = initAuthListener();
		return unsubscribe;
	}, [initAuthListener]);
	const scheme = useColorScheme();
	return (
		<QueryClientProvider client={queryClient}>
			<PaperProvider theme={scheme === "dark" ? darkTheme : lightTheme}>
				<SafeAreaProvider>
					<Stack
						screenOptions={{
							headerStyle: {
								backgroundColor: "#f4511e",
							},
							headerShown: false,
							headerTintColor: "#fff",
							headerTitleStyle: {
								fontWeight: "bold",
							},
						}}
					></Stack>
					<Toast />
				</SafeAreaProvider>
			</PaperProvider>
		</QueryClientProvider>
	);
}
