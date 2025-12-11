import { darkTheme, lightTheme } from "@/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { PaperProvider, useTheme } from "react-native-paper";
import Toast from "react-native-toast-message";

export default function RootLayout() {
	const theme = useTheme();
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<PaperProvider theme={theme.dark ? darkTheme : lightTheme}>
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
				>
					<Stack.Screen name="index" />
					<Stack.Screen name="auth" />
				</Stack>
				<Toast />
			</PaperProvider>
		</QueryClientProvider>
	);
}
