import {
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	StyleSheet,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../global.css";
function AuthScreenLayout({ children }: { children: React.ReactNode }) {
	return (
		<SafeAreaView className="flex-1 bg-background text-text">
			<KeyboardAvoidingView
				style={styles.keyboard}
				behavior={Platform.OS === "ios" ? "padding" : undefined}
			>
				<ScrollView
					contentContainerStyle={styles.scrollContent}
					keyboardShouldPersistTaps="handled"
				>
					<View className="gap-4">{children}</View>
				</ScrollView>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: "#0a0a0a",
	},
	keyboard: {
		flex: 1,
	},
	scrollContent: {
		flexGrow: 1,
		padding: 20,
		justifyContent: "center",
	},
});
export default AuthScreenLayout;
