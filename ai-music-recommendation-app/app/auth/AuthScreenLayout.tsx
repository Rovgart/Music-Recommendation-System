import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function AuthScreenLayout({ children }: { children: React.ReactNode }) {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<KeyboardAvoidingView
				style={{ flex: 1 }}
				behavior={Platform.OS === "ios" ? "padding" : undefined}
			>
				<ScrollView
					contentContainerStyle={{
						flexGrow: 1,
						padding: 20,
						justifyContent: "center",
					}}
					keyboardShouldPersistTaps="handled"
				>
					<View style={{ gap: 16 }}>{children}</View>
				</ScrollView>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
}
