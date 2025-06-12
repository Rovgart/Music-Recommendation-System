import { apiClient } from "@/api/apiClient";
import { API_URL } from "@/index";
import mocks from "@/mocks/mocks.json";
import { AxiosInstance } from "axios";
const { AI } = API_URL;
class AI_Service {
  private api: AxiosInstance;
  constructor(apiClient: AxiosInstance) {
    this.api = apiClient;
  }
  async generatePlaylists(prompt: string) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("resolved");
        console.log(mocks);
        resolve(mocks);
      }, 3000);
    });

    // const resp=await this.api.post(AI.GENERATE_PLAYLIST, prompt)
    // return resp.data
  }
  async savePlaylist(playlistId: number | string) {
    const resp = await this.api.post(`${AI.SAVE_PLAYLIST}/${playlistId}`);
    return resp.data;
  }
}
export const AiService = new AI_Service(apiClient);
