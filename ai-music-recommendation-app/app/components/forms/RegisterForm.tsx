import { registerUser } from "@/api/api";
import { type RegisterFormValues, registerSchema } from "@/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { Controller, Form, useForm } from "react-hook-form";
import { Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import Toast from "react-native-toast-message";
import { GoogleButton } from "../buttons/GoogleButton";
export default function RegisterForm() {
	const router = useRouter();
	const form = useForm<RegisterFormValues>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});
	const onSubmit = async (data: RegisterFormValues) => {
		Toast.show({
			type: "info",
			text1: "Rejestracja...",
			autoHide: false,
		});

		const result = await registerUser(data);
		if (result.success) {
			Toast.show({
				type: "success",
				text1: "Account successfully created",
				text2: "Witaj w aplikacji 🎉",
				visibilityTime: 2000,
				onHide: () => router.replace("/"),
			});
		} else {
			Toast.show({
				type: "error",
				text1: "Failed to sign up",
				text2: result.error,
			});
		}
	};

	return (
		<Form {...form}>
			<View style={{ flex: 1, display: "flex", gap: 16 }}>
				<Controller
					control={form.control}
					name="email"
					render={({ field }) => {
						return (
							<TextInput
								mode="outlined"
								value={field.value}
								onChangeText={field.onChange}
								placeholder="Email"
							/>
						);
					}}
				/>
				<Controller
					control={form.control}
					name="password"
					render={({ field, fieldState }) => {
						return (
							<>
								<TextInput
									secureTextEntry
									mode="outlined"
									value={field.value}
									onChangeText={field.onChange}
									placeholder="Password"
								/>
								<Text style={{ color: "red" }}>
									{fieldState.error?.message}
								</Text>
							</>
						);
					}}
				/>
			</View>
			<View style={{ gap: 8, marginTop: 16 }}>
				<Button
					loading={form.formState.isLoading}
					icon={"login-variant"}
					onPress={form.handleSubmit(onSubmit)}
					style={{ borderRadius: 8, paddingVertical: 4 }}
					mode="contained"
				>
					Sign Up
				</Button>
				<GoogleButton
					onPress={() => {
						Toast.show({
							position: "top",
							type: "success",
							text1: "Google Auth",
							text2: "Is showing !",
						});
					}}
				/>
			</View>
		</Form>
	);
}
