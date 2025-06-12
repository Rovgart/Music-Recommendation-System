import ModalComponent from "@/components/organisms/ModalComponent";
import { useModalStore } from "@/store/modalStore";
import { ThemeProvider } from "@/store/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
export default function RootLayout() {
  const queryClient = new QueryClient();
  const { isOpen } = useModalStore();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        {isOpen && <ModalComponent />}
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen name="index" />
          <Stack.Screen name="auth" />
        </Stack>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
