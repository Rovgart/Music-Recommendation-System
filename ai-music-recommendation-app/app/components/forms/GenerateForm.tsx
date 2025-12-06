import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";
import { Button, TextInput, useTheme } from "react-native-paper";

export default function GenerateForm() {
	const { control } = useForm();
	const theme = useTheme();

	return (
		<View
			style={{
				width: "100%",
				alignItems: "center",
				gap: 8,
			}}
		>
			<Controller
				control={control}
				name="prompt"
				defaultValue=""
				render={({ field: { onChange, value } }) => (
					<TextInput
						mode="outlined"
						value={value}
						onChangeText={onChange}
						style={{ width: 240 }}
					/>
				)}
			/>

			<Button
				mode="contained"
				style={{
					backgroundColor: theme.colors.backdrop,
					width: 240,
				}}
			>
				Generate
			</Button>
		</View>
	);
}
