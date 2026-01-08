import { Text, TouchableOpacity, View } from "react-native";

export default function Test() {
	return (
		<View className="flex-1 bg-blue-300 items-center justify-center">
			<View className="bg-zinc-900 p-8 rounded-2xl">
				<Text className="text-3xl font-bold text-white mb-4">
					NativeWind Works! 🎉
				</Text>
				<TouchableOpacity className="bg-spotify-green px-6 py-3 rounded-lg">
					<Text className="text-white font-semibold text-center">Click Me</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
