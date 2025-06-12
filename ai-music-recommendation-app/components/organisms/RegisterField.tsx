import { registerSchema } from "@/schemas/auth";
import type { RegisterRequestT } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input/Input";
export default function RegisterField() {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<RegisterRequestT>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      repeatPassword: "",
    },
  });
  const onRegisterSubmit = async (data: RegisterRequestT) => {
    try {
      console.log("Form Data", data);
    } catch (er) {
      console.error(er);
    }
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
          <Input
            onChangeText={field.onChange}
            error={errors.email && errors.email.message}
            placeholder="Email"
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <Input
            onChangeText={field.onChange}
            error={errors.password && errors.password.message}
            placeholder="Password"
            secureTextEntry
          />
        )}
      />
      <Controller
        name="repeatPassword"
        control={control}
        render={({ field }) => (
          <Input
            secureTextEntry
            onChangeText={field.onChange}
            error={errors.email && errors.email.message}
            placeholder="Repeat Password"
          />
        )}
      />
      <Button onPress={handleSubmit(onRegisterSubmit)} title="Sign up" />
    </View>
  );
}
