import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button } from "react-native-paper";

export function GoogleButton({ onPress }: { onPress: () => void }) {
	return (
		<Button
			mode="contained"
			onPress={onPress}
			icon={() => (
				<MaterialCommunityIcons name="google" size={20} color="white" />
			)}
			style={{
				borderRadius: 8,
				paddingVertical: 4,
			}}
		>
			Continue with Google
		</Button>
	);
}
