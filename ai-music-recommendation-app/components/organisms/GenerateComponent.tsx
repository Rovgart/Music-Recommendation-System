import { useGeneratePlaylistStore } from "@/store/playlistsStore";
import { View } from "react-native";
import Card from "./Card";
import GenerateForm from "./GenerateForm";
export default function GenerateComponent() {
  const { generatedPlaylists } = useGeneratePlaylistStore();

  return (
    <View style={{ height: 500, gap: 12 }}>
      <GenerateForm />
      <Card data={generatedPlaylists.cards} />
    </View>
  );
}
