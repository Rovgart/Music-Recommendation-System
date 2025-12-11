import { auth } from "@/firebase";
import type { RegisterFormValues } from "@/schemas/auth";
import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const registerUser = async (data: RegisterFormValues) => {
	try {
		const userCredential = await createUserWithEmailAndPassword(
			auth,
			data.email,
			data.password,
		);
		const user = userCredential.user;
		console.log("User registered", user);

		return { success: true, user };
	} catch (error) {
		if (error instanceof FirebaseError) {
			switch (error.code) {
				case "auth/email-already-in-use":
					return { success: false, error: "This email is already registered" };

				case "auth/invalid-email":
					return { success: false, error: "Invalid email" };

				case "auth/weak-password":
					return { success: false, error: "Password is too weak" };

				default:
					return { success: false, error: "Error occurred during signing up" };
			}
		}
		return { success: false, error: "Unknown error occurred" };
	}
};
