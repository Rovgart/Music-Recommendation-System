import { loginUser } from "@/api/api";
import { type LoginFormValues, loginSchema } from "@/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import Toast from "react-native-toast-message";
import Button from "../buttons/button";
import GoogleButton from "../buttons/GoogleButton";

export default function LoginForm() {
	const router = useRouter();
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
		<View className="flex-1 justify-center p-6">
			<Text className="text-4xl text-text font-bold justify-center text-center mb-6">
				Sign In
			</Text>
			<View className="gap-6">
				<Controller
					control={form.control}
					name="email"
					render={({ field }) => (
						<TextInput
							className="bg-text border-secondary/40 text-text placeholder:text-muted focus:border-accent focus:ring-1 focus:ring-accent"
							mode="outlined"
							value={field.value}
							onChangeText={field.onChange}
							placeholder="Email"
							onBlur={field.onBlur}
						/>
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
								<Text style={{ color: "red" }}>{fieldState.error.message}</Text>
							)}
						</>
					)}
				/>

				<View className="gap-4 mt-8 ">
					<Button
						title="Sign in"
						// loading={form.formState.isSubmitting}
						// icon="login-variant"
						onPress={form.handleSubmit(onSubmit)}
					/>

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
				<View className="flex flex-row justify-center items-center gap-4 mt-8">
					<Text className="text-text">Dont have an account?</Text>
					<Button
						onPress={() => {
							router.push("/auth/register");
						}}
						title="Sign Up"
					/>
				</View>
			</View>
		</View>
	);
}
