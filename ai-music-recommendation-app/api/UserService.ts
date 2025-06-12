import { apiClient } from "@/api/apiClient";
import { API_URL } from "@/index";
import { LoginRequestT, LoginResponseT, RegisterRequestT } from "@/types";
import { AxiosInstance } from "axios";

const { AUTH, USER } = API_URL;

class UserService {
  private api: AxiosInstance;
  constructor(apiClient: AxiosInstance) {
    this.api = apiClient;
  }
  async createUser(userData: RegisterRequestT) {
    const response = await this.api.post(AUTH.SIGN_UP, { ...userData });
    return response.data;
  }
  async loginUser(userData: LoginRequestT): Promise<LoginResponseT> {
    const response = await this.api.post(AUTH.SIGN_IN, { ...userData });
    return response.data;
  }
  async updateUser(id: number, userData: any) {
    const response = await this.api.put(`${USER.UPDATE_USER}/${id}`, {
      ...userData,
    });
    return response.data;
  }
  async updatePassword(userId: number, new_password: string) {
    const response = await this.api.put(`${USER.CHANGE_PASSWORD}`, {
      data: {
        userId,
        new_password,
      },
    });
    return response.data;
  }
}
export const userService = new UserService(apiClient);
