import { useTheme } from "@/store/ThemeProvider";
import { createMemoryStyles } from "@/utils";
import { Link } from "expo-router";
import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import User from "react-native-vector-icons/FontAwesome5";

export default function Header() {
  const { theme } = useTheme();
  const styles = createMemoryStyles(theme);

  return (
    <View
      style={{
        padding: 12,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Icon style={[styles.icon]} name="menu" size={36} />
      <Link href={"/user/_index"}>
        <User style={[styles.icon]} name="user-circle" size={36} />
      </Link>
    </View>
  );
}
