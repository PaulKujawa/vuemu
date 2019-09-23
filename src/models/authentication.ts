export interface AuthRequest {
  client_id: string;
  redirect_uri: string;
  response_type: "token";
}

export interface AuthResponseSuccess {
  access_token: string;
  expires_in: 3600;
  state?: string;
  token_type: "Bearer";
}

export interface AuthResponseFailure {
  error: string;
  state?: string;
}

export type AuthResponse = AuthResponseSuccess | AuthResponseFailure;
