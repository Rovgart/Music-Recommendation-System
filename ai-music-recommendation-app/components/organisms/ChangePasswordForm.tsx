import { changePasswordSchema } from "@/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input/Input";
export default function ChangePasswordForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: { password: "", new_password: "" },
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <View style={{ padding: 14, gap: 12 }}>
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange } }) => (
          <Input
            secureTextEntry
            placeholder="Enter password"
            error={errors && errors.password?.message}
            onChangeText={onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="new_password"
        render={({ field: { onChange } }) => (
          <Input
            secureTextEntry
            placeholder="Enter new password"
            error={errors && errors.new_password?.message}
            onChangeText={onChange}
          />
        )}
      />
      {errors && errors.root?.message}
      <Button variant="primary" onPress={handleSubmit(onSubmit)} title="Save" />
    </View>
  );
}
