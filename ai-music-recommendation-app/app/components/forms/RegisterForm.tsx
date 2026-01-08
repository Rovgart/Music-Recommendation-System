import { registerUser } from "@/api/api";
import { type RegisterFormValues, registerSchema } from "@/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import Toast from "react-native-toast-message";
import Button from "../buttons/button";
import GoogleButton from "../buttons/GoogleButton";

export default function RegisterForm() {
	const router = useRouter();

	const form = useForm<RegisterFormValues>({
		resolver: zodResolver(registerSchema),
		defaultValues: { email: "", password: "" },
	});

	const onSubmit = async (data: RegisterFormValues) => {
		Toast.show({ type: "info", text1: "Rejestracja...", autoHide: false });
		const result = await registerUser(data);

		if (result.success) {
			Toast.show({
				type: "success",
				text1: "Account successfully created",
				visibilityTime: 2000,
				onHide: () => router.push("/app"),
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
		<View className="flex-1 justify-center p-6">
			<Text className="text-4xl text-text font-bold justify-center text-center mb-6">
				Sign Up
			</Text>

			<View className="gap-4">
				<Controller
					control={form.control}
					name="email"
					render={({ field, fieldState }) => (
						<>
							<TextInput
								className="bg-text border border-secondary/40 text-text placeholder:text-muted focus:border-accent focus:ring-1 focus:ring-accent"
								secureTextEntry
								mode="outlined"
								value={field.value}
								onChangeText={field.onChange}
								placeholder="Email"
							/>
							{fieldState.error && (
								<Text style={styles.errorText}>{fieldState.error.message}</Text>
							)}
						</>
					)}
				/>

				<Controller
					control={form.control}
					name="password"
					render={({ field, fieldState }) => (
						<>
							<TextInput
								className="bg-text border border-secondary/40 text-text placeholder:text-muted focus:border-accent focus:ring-1 focus:ring-accent"
								secureTextEntry
								mode="outlined"
								value={field.value}
								onChangeText={field.onChange}
								placeholder="Password"
							/>
							{fieldState.error && (
								<Text style={styles.errorText}>{fieldState.error.message}</Text>
							)}
						</>
					)}
				/>
			</View>
			<View className="gap-4 mt-8">
				<Button onPress={form.handleSubmit(onSubmit)} title="Sign Up" />
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
			<View className="mt-8 flex flex-row gap-4 justify-center items-center">
				<Text className="text-text">Already have an account?</Text>
				<Button
					onPress={() => {
						router.push("/auth/login");
					}}
					title="Sign In"
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#0a0a0a",
		padding: 20,
		justifyContent: "center",
	},
	title: {
		fontSize: 32,
		fontWeight: "bold",
		color: "#fff",
		marginBottom: 32,
		textAlign: "center",
	},
	form: { gap: 16 },
	input: {
		// backgroundColor: "#1a1a1
		color: "#fff",
	},
	button: {
		borderRadius: 8,
		paddingVertical: 10,
	},
	errorText: {
		color: "#ef4444",
		fontSize: 13,
		marginTop: 4,
	},
});
