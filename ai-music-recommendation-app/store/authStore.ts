import { userService } from "@/api/UserService";
import { LoginRequestT, User } from "@/types";
import * as Keychain from "react-native-keychain";
import { create } from "zustand";
interface AuthStoreI {
  isAuthenticated: boolean;
  token: null | string;
  user: User;
  setIsAuthenticated: (isAuth: boolean) => void;
  setToken: (token: string) => void;
  setUser: (userData: User) => void;
  login: (userData: LoginRequestT) => Promise<void>;
  logout: () => void;
}
export const useAuthStore = create<AuthStoreI>((set, get) => ({
  isAuthenticated: false,
  token: null,
  user: {
    id: 1,
    username: "",
    email: "",
  },
  setIsAuthenticated: (isAuth) => set({ isAuthenticated: isAuth }),
  setToken: async (token) => {
    await Keychain.setInternetCredentials(
      "aimusicrecommendationapp_auth",
      "ACCESS_TOKEN",
      token
    );
  },
  getToken: async () => {
    try {
      const credentials = await Keychain.getInternetCredentials(
        "aimusicrecommendationapp_auth"
      );
      return credentials ? credentials.password : null;
    } catch (error) {
      return null;
    }
  },
  setUser: (userData) =>
    set({
      user: userData,
      isAuthenticated: true,
    }),
  login: async (userData) => {
    const { setUser, setToken, setIsAuthenticated } = get();
    const res = await userService.loginUser(userData);
    if (res?.access_token) {
      setIsAuthenticated(true);
      setToken(res?.access_token);
      setUser(res?.user);
    }
  },
  logout: () =>
    set(() => ({
      isAuthenticated: false,
      token: null,
      user: { id: null, username: "" },
    })),
}));
