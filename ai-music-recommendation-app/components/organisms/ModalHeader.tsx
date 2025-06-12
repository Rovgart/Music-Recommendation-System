import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
export default function ModalHeader({ children }: { children: ReactNode }) {
  return (
    <View style={[styles.centeredView]}>
      <Icon name="close" />
      {children}
    </View>
  );
}
const styles = StyleSheet.create({
  centeredView: {
    padding: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
  },
});
