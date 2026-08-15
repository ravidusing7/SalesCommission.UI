export interface LoginResponse {

  accessToken: string;
  refreshToken: string;
  expiresAt: string;
  role: string;
  permissions: string[];

}