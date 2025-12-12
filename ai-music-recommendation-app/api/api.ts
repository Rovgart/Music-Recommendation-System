import { auth } from "@/firebase";
import type { LoginFormValues, RegisterFormValues } from "@/schemas/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { FirebaseError } from "firebase/app";
import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithCredential,
	signInWithEmailAndPassword,
} from "firebase/auth";

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
export const loginUser = async (data: LoginFormValues) => {
	try {
		const res = await signInWithEmailAndPassword(
			auth,
			data.email,
			data.password,
		);
		const user = res.user;
		return { success: true, user };
	} catch (error) {
		if (error instanceof FirebaseError) {
			switch (error.code) {
				case "auth/invalid-email":
					return { success: false, error: "Invalid email address" };

				case "auth/user-disabled":
					return { success: false, error: "This account has been blocked" };

				case "auth/user-not-found":
					return { success: false, error: "User not found" };

				case "auth/wrong-password":
					return { success: false, error: "Incorrect password" };

				case "auth/invalid-credential":
					return { success: false, error: "Incorrect email or password" };

				case "auth/too-many-requests":
					return {
						success: false,
						error: "Too many attempts. Try again later",
					};

				default:
					return { success: false, error: "Error occurred during login" };
			}
		}
	}
	return { success: false, error: "Unknown error occurred" };
};
export const signInWIthGoogle = async () => {
	try {
		await GoogleSignin.hasPlayServices();
		const userInfo = await GoogleSignin.signIn();
		const { idToken } = await GoogleSignin.getTokens();
		const credential = GoogleAuthProvider.credential(idToken);
		const userCredential = await signInWithCredential(auth, credential);
		return { success: true, user: userCredential.user };
	} catch (error) {
		console.error("Google Sign-In Error", error);
		return {
			success: false,
			error: error.message || "Błąd logowania przez Google",
		};
	}
};
