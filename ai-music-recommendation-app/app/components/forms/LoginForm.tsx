import { loginUser } from "@/api/api";
import { type LoginFormValues, loginSchema } from "@/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import Toast from "react-native-toast-message";
import { GoogleButton } from "../buttons/GoogleButton";

export default function LoginForm() {
	const form = useForm<LoginFormValues>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = async (data: LoginFormValues) => {
		Toast.show({
			type: "info",
			text1: "Signing in...",
			autoHide: false,
		});

		const result = await loginUser(data);

		if (result.success) {
			Toast.show({
				type: "success",
				text1: "Successfully logged in",
				text2: "Welcome in application 🎉",
				visibilityTime: 2000,
			});
		} else {
			Toast.show({
				type: "error",
				text1: "Failed to sign in",
				text2: result.error,
			});
		}
	};

	return (
		<View style={{ flex: 1 }}>
			<View style={{ gap: 16 }}>
				<Controller
					control={form.control}
					name="email"
					render={({ field }) => (
						<TextInput
							mode="outlined"
							value={field.value}
							onChangeText={field.onChange}
							placeholder="Email"
						/>
					)}
				/>

				<Controller
					control={form.control}
					name="password"
					render={({ field, fieldState }) => (
						<>
							<TextInput
								secureTextEntry
								mode="outlined"
								value={field.value}
								onChangeText={field.onChange}
								placeholder="Password"
							/>
							{fieldState.error && (
								<Text style={{ color: "red" }}>{fieldState.error.message}</Text>
							)}
						</>
					)}
				/>

				<View style={{ gap: 8, marginTop: 16 }}>
					<Button
						loading={form.formState.isSubmitting}
						icon="login-variant"
						onPress={form.handleSubmit(onSubmit)}
						mode="contained"
					>
						Sign In
					</Button>

					<GoogleButton
						onPress={() =>
							Toast.show({
								type: "success",
								text1: "Google Auth",
								text2: "Is showing!",
							})
						}
					/>
				</View>
				<View />
			</View>
		</View>
	);
}
