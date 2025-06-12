import { useModalStore } from "@/store/modalStore";
import { Text, View } from "react-native";
import User from "react-native-vector-icons/FontAwesome5";
import { Button } from "../atoms/Button";
import ChangePasswordForm from "./ChangePasswordForm";
interface UserI {
  id: number;
  username: string;
  email: string;
  url: string;
}
type UserPropsT = {
  user: UserI;
  styles: Record<string, string>;
};
export default function UserInfo({ styles, user }: UserPropsT) {
  const { openModal } = useModalStore();
  const changePasswordModalHandler = () => {
    openModal("change-password", {
      modalHeader: <Text style={{ fontSize: 24 }}>Change Password </Text>,
      modalBody: <ChangePasswordForm />,
    });
  };
  return (
    <View style={{ gap: 12 }}>
      <View style={{ justifyContent: "center", alignItems: "center", gap: 16 }}>
        <User name="user-circle" size={96} />
        <Text style={{ fontSize: 16, fontWeight: "semibold" }}>
          {user?.username || "John Doe"}
        </Text>
      </View>
      <Button
        onPress={changePasswordModalHandler}
        title="Change Password"
        variant="outline"
      />
      <Button title="Change email" variant="outline" />
      <Button title="Settings" variant="outline" />
    </View>
  );
}
