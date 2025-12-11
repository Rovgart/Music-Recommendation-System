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
	} catch (error) {
		if (error instanceof FirebaseError) {
			switch (error.code) {
				case "auth/email-already-in-use":
					console.log("Email already in use");
					break;
				case "auth/invalid-email":
					console.log("Invalid email");
					break;
				case "auth/weak-password":
					console.log("Password is too weak");
					break;
			}
		} else {
			console.log("Unknown error", error);
		}
	}
};
