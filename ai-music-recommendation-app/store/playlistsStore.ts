import { AiService } from "@/api/AIService";
import { create } from "zustand";
type Song = {
  id: number;
  songTitle: string;
  format: "mp3" | "wav";
  filePath: string;
};
type Playlist = {
  id: number;
  playlistTitle: string;
  songs: Song[];
};
interface GeneratePlaylistStoreI {
  generatedPlaylists: [];
  setGeneratedPlaylists: (playlist: Playlist) => void;
  saveGeneratedPlaylists: (playListId: number) => void;
  deleteGeneratedPlaylist: () => void;
}
export const useGeneratePlaylistStore = create<GeneratePlaylistStoreI>(
  (set, get) => ({
    generatedPlaylists: [],
    saveGeneratedPlaylists: async (playlistId) => {
      AiService.savePlaylist(playlistId);
    },
    setGeneratedPlaylists: (playlist) =>
      set(() => ({ generatedPlaylists: playlist })),
    deleteGeneratedPlaylist: () => set(() => ({ generatedPlaylists: [] })),
  })
);
