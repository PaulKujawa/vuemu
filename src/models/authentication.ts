export type AuthRequest = {
  client_id: string;
  response_type: "token";
  redirect_uri: string;
};

export type AuthResponseSuccess = {
  access_token: string;
  token_type: "Bearer";
  expires_in: 3600;
  state?: string;
};

export type AuthResponseFailure = {
  error: string;
  state?: string;
};

export type AuthResponse = AuthResponseSuccess | AuthResponseFailure;
