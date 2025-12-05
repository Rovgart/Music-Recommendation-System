// import PlaylistItem from "@/components/molecules/PlaylistItem";
import { createMemoryStyles } from "@/utils";
import { useLocalSearchParams } from "expo-router";
import { FlatList, Text, View } from "react-native";
import { useTheme } from "react-native-paper";
import { saved_playlists } from "../../mocks/saved_playlists.json";

export default function PlaylistDetails() {
  const  theme  = useTheme();
  const styles = createMemoryStyles(theme);
  const { playlist_id } = useLocalSearchParams();
  const searchedPlaylist = saved_playlists.filter(
    (item) => item.id === playlist_id
  );
  const playlist = searchedPlaylist[0];

  const renderItem = ({ item }) => (
    <View style={styles.songItem}>
      <Text style={styles.songTitle}>{item.title}</Text>
      <Text style={styles.songArtist}>{item.artist}</Text>
    </View>
  );

  return (
    <View style={[{backgroundColor:theme.colors.background}, { padding: 12, gap: 24 }]}>
      {/* <Icon onPress={() => router.push("/users/index")} name="back" size={24} /> */}
      {/* <PlaylistItem
        key={playlist?.id}
        cardTitle={playlist?.title}
        cardImageUrl={playlist?.url}
      /> */}

      <Text style={styles.title}>Songs</Text>

      <FlatList
        data={playlist?.songs}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}
