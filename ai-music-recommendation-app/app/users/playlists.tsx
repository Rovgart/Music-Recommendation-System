// import UsersPlaylists from "@/components/organisms/UsersPlaylists";
import { createMemoryStyles } from "@/utils";
import { View } from "react-native";
import { useTheme } from "react-native-paper";
export default function UsersPlaylists() {
  const theme  = useTheme()
  const styles = createMemoryStyles(theme);
  return (
    <View style={[styles.container]}>
      {/* <UsersPlaylists data={saved_playlists}></UsersPlaylists> */}
    </View>
  );
}
