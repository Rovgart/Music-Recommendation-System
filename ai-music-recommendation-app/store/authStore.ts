import { auth } from "@/firebase";
import { onAuthStateChanged, type User } from "firebase/auth";
import { create } from "zustand";

type AuthState = {
	user: User | null;
	loading: boolean;
	initAuthListener: () => void;
};
export const useAuthStore = create<AuthState>((set, get) => ({
	user: null,
	loading: true,
	initAuthListener: () => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			set({
				user,
				loading: false,
			});
		});
		return unsubscribe;
	},
}));
