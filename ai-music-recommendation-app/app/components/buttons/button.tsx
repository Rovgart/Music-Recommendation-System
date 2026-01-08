import clsx from "clsx";
import { type RelativePathString, router } from "expo-router";
import { useState } from "react";
import { Pressable, Text } from "react-native";

type Props = {
	title: string;
	onPress?: () => void;
	href?: RelativePathString;
	variant?: "primary" | "secondary" | "accent";
	disabled?: boolean;
};

function Button({
	title,
	onPress,
	href,
	variant = "primary",
	disabled,
}: Props) {
	const [isPressed, setIsPressed] = useState(false);

	const handlePress = () => {
		if (disabled) return;
		if (href) router.push(href);
		else onPress?.();
	};

	return (
		<Pressable
			disabled={disabled}
			onPress={handlePress}
			onPressIn={() => setIsPressed(true)}
			onPressOut={() => setIsPressed(false)}
			className={clsx(
				"px-6 py-3 rounded-lg items-center justify-center border-2 shadow-lg shadow-primary/35",
				{
					// Variants
					"bg-primary border-accent": variant === "primary",
					"bg-secondary border-accent": variant === "secondary",
					"bg-accent border-accent": variant === "accent",

					// States
					"opacity-50": disabled,
					"opacity-80 scale-95": isPressed && !disabled,
				},
			)}
		>
			<Text
				className={clsx("font-semibold tracking-wide", {
					"text-white": variant === "primary" || variant === "secondary",
					"text-black": variant === "accent",
				})}
			>
				{title}
			</Text>
		</Pressable>
	);
}

export default Button;
