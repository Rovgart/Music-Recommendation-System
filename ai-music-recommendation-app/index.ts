export const BASE_URL = `http://localhost:8000/api`;

export const API_URL = {
  AUTH: {
    SIGN_IN: `${BASE_URL}/auth/sign-up`,
    SIGN_UP: `${BASE_URL}/auth/sign-in`,
  },
  USER: {
    UPDATE_USER: `${BASE_URL}/user/update_user`,
    CHANGE_PASSWORD: `${BASE_URL}/user/change_password`,
  },
  AI: {
    GENERATE_PLAYLIST: `${BASE_URL}/ai/generate`,
    SAVE_PLAYLIST: `${BASE_URL}/ai/save_playlist/`,
  },
};
