import { Form, useForm } from "react-hook-form";
import { Button, TextInput, useTheme } from "react-native-paper";
export const GenerateForm = () => {
	const form = useForm();
	const theme = useTheme();
	return (
		<Form control={form.control}>
			<form style={{ display: "flex", flexDirection: "column", gap: 8 }}>
				<TextInput />
				<Button
					style={{
						backgroundColor: theme.colors.backdrop,
						width: 400,
						margin: "auto",
					}}
				>
					Generate
				</Button>
			</form>
		</Form>
	);
};
