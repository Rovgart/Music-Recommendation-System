import { useGeneratePlaylists } from "@/hooks/useGenerate";
import { generateFormSchema } from "@/schemas/generate";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input/Input";
export default function GenerateForm() {
  const { handleSubmit, control } = useForm({
    resolver: zodResolver(generateFormSchema),
    defaultValues: {
      generateField: "",
    },
  });
  const { mutate, isPending, isSuccess, data } = useGeneratePlaylists();

  const handleGenerate = (prompt: string) => {
    mutate(prompt);
  };
  return (
    <View style={{ gap: 24, padding: 14 }}>
      <Controller
        control={control}
        name="generateField"
        render={({ field: { onChange } }) => (
          <Input
            onChangeText={onChange}
            placeholder="How are you feeling today ?"
          />
        )}
      />
      <Button
        onPress={handleSubmit(handleGenerate)}
        title="Generate playlists"
      />
    </View>
  );
}
