import { AiService } from "@/api/AIService";
import { useGeneratePlaylistStore } from "@/store/playlistsStore";
import { useMutation } from "@tanstack/react-query";
export const useGeneratePlaylists = () => {
  const { setGeneratedPlaylists } = useGeneratePlaylistStore();
  return useMutation({
    mutationFn: async (prompt: string) => {
      const data = await AiService.generatePlaylists(prompt);
      setGeneratedPlaylists(data);
    },
  });
};
