import { ReactNode } from "react";
import { View } from "react-native";

export default function ModalBody({ children }: { children: ReactNode }) {
  return <View>{children}</View>;
}
