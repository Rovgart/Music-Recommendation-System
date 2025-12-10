import { Controller, Form, useForm } from "react-hook-form";
import { View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { GoogleButton } from "../buttons/GoogleButton";

export default function RegisterForm() {
	const form = useForm();
	return (
		<Form {...form}>
			<form onSubmit={() => console.log("Submitted")} action="">
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
						render={({ field }) => {
							return (
								<TextInput
									secureTextEntry
									mode="outlined"
									value={field.value}
									onChangeText={field.onChange}
									placeholder="Password"
								/>
							);
						}}
					/>
				</View>
				<View style={{ gap: 8, marginTop: 16 }}>
					<Button
						onPress={() => console.log("Creating account...")}
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
			</form>
		</Form>
	);
}
