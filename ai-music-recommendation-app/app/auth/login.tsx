import "../../global.css";
import LoginForm from "../components/forms/LoginForm";
import AuthScreenLayout from "./AuthScreenLayout";
export default function Login() {
	return (
		<AuthScreenLayout>
			<LoginForm />
		</AuthScreenLayout>
	);
}
