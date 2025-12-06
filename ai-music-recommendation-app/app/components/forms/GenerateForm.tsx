import { Form, useForm } from "react-hook-form";
import { Button, TextInput, useTheme } from "react-native-paper";
export const GenerateForm = () => {
	const form = useForm();
	const theme = useTheme();
	return (
		<Form control={form.control}>
			<form
				style={{
					display: "flex",
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
					gap: 8,
				}}
			>
				<TextInput
					style={{
						width: "60%",
					}}
				/>
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
