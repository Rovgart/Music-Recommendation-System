import { useAuthStore } from "@/store/authStore";
import { LoginRequestT } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {} from "react-native-keychain";
export const useLogin = () => {
  const queryClient = useQueryClient();
  const { login } = useAuthStore();
  useMutation({
    mutationFn: (userData: LoginRequestT) => login(userData),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
  });
};
