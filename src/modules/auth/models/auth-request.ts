export interface AuthRequest {
  client_id: string;
  redirect_uri: string;
  scope?: string;
  response_type: "token";
}
