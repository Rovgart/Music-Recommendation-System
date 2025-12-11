import { registerUser } from "@/api/api";
import { type RegisterFormValues, registerSchema } from "@/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, Form, useForm } from "react-hook-form";
import { Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { GoogleButton } from "../buttons/GoogleButton";
export default function RegisterForm() {
	const form = useForm<RegisterFormValues>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});
	const onSubmit = async (data: RegisterFormValues) => {
		registerUser(data);
		console.log(data);
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
						console.log("Google Button");
					}}
				/>
			</View>
		</Form>
	);
}
