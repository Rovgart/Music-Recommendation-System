import { useAuthStore } from "@/store/authStore";
import { Redirect, Slot } from "expo-router";
import { useEffect } from "react";

export default function AppLayout() {
	const { loading, user } = useAuthStore();
	useEffect(() => {
		console.log(user?.email);
	});
	if (loading) {
		return null;
	}
	if (!user) {
		return <Redirect href={"/auth/login"} />;
	}
	return <Slot />;
}
