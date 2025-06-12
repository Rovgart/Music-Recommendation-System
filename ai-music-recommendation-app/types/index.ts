export type RegisterRequestT = {
  email: string;
  password: string;
  repeatPassword: string;
};
export type LoginRequestT = {
  email: string;
  password: string;
};
export type User = {
  id: number;
  username: string;
  email: string;
};
export type LoginResponseT = {
  user: User;
  access_token: string;
  refresh_token?: string;
};
