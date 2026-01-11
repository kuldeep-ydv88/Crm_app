export interface LoginRequest {
  username: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  password: string;
  email: string;
  fullName: string;
  role?: string;
}

export interface AuthResponse {
  token: string;
  username: string;
  email: string;
  fullName: string;
  role: string;
}

export interface UserProfile {
  id: string;
  username: string;
  email: string;
  fullName: string;
  role: string;
}
