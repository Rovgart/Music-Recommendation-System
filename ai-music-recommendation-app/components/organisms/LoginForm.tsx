import { userService } from "@/api/UserService";
import { loginSchema } from "@/schemas/auth";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input/Input";
type SubmitDataT = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });
  const onSubmit = (data: SubmitDataT) => {
    userService.login(data);
  };
  return (
    <View
      style={{
        gap: 12,
      }}
    >
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <Input onChangeText={field.onChange} placeholder="Email" />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <Input
            secureTextEntry
            onChangeText={field.onChange}
            placeholder="Password"
          />
        )}
      />
      <Button onPress={handleSubmit(onSubmit)} title="Sign In" />
    </View>
  );
}
