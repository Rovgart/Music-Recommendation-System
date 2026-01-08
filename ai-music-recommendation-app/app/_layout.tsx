import { useAuthStore } from "@/store/authStore";
import { darkTheme, lightTheme } from "@/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { Text, useColorScheme, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Toast, {
	BaseToast,
	ErrorToast,
	type ToastConfig,
} from "react-native-toast-message";
import "../global.css";
const queryClient = new QueryClient();

export const toastConfig: ToastConfig = {
	success: (props) => (
		<BaseToast
			{...props}
			style={{
				backgroundColor: "#1A1714",
				borderLeftColor: "#CA8A04",
				borderLeftWidth: 4,
				borderRadius: 12,
			}}
			contentContainerStyle={{
				paddingHorizontal: 16,
				paddingVertical: 10,
			}}
			text1Style={{
				color: "#F5F5F4",
				fontSize: 14,
				fontWeight: "600",
				letterSpacing: 0.5,
			}}
			text2Style={{
				color: "#78716C",
				fontSize: 12,
			}}
		/>
	),

	error: (props) => (
		<ErrorToast
			{...props}
			style={{
				backgroundColor: "#1A1714",
				borderLeftColor: "#C2410C",
				borderLeftWidth: 4,
				borderRadius: 12,
			}}
			contentContainerStyle={{
				paddingHorizontal: 16,
				paddingVertical: 10,
			}}
			text1Style={{
				color: "#F5F5F4",
				fontSize: 14,
				fontWeight: "600",
			}}
			text2Style={{
				color: "#A8A29E",
				fontSize: 12,
			}}
		/>
	),

	info: (props) => (
		<View
			style={{
				backgroundColor: "#1A1714",
				paddingHorizontal: 16,
				paddingVertical: 12,
				borderRadius: 12,
				borderLeftWidth: 4,
				borderLeftColor: "#92400E",
				shadowColor: "#92400E",
				shadowOpacity: 0.4,
				shadowRadius: 10,
				shadowOffset: { width: 0, height: 0 },
				elevation: 6,
				minWidth: 300,
				maxWidth: "90%",
			}}
		>
			{props.text1 ? (
				<Text
					style={{
						color: "#F5F5F4",
						fontWeight: "600",
						fontSize: 14,
					}}
				>
					{props.text1}
				</Text>
			) : null}
			{props.text2 ? (
				<Text
					style={{
						color: "#78716C",
						fontSize: 12,
						marginTop: 2,
					}}
				>
					{props.text2}
				</Text>
			) : null}
		</View>
	),
};
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
					<Toast config={toastConfig} />
				</SafeAreaProvider>
			</PaperProvider>
		</QueryClientProvider>
	);
}
