import { useAuthStore } from "@/store/authStore";
import { Redirect, Slot } from "expo-router";

export default function AuthLayout() {
	const { user, loading } = useAuthStore();
	if (loading) {
		return null;
	}
	if (user) {
		return <Redirect href={"/app"} />;
	}
	return <Slot />;
}
