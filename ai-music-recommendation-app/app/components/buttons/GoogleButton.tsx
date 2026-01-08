import Button from "./button";

function GoogleButton({ onPress }: { onPress: () => void }) {
	return (
		<Button
			title="Continue with Google"
			onPress={onPress}
			variant="secondary"
		/>
	);
}
export default GoogleButton;
