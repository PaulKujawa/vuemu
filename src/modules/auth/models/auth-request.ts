export interface AuthRequest {
  client_id: string;
  redirect_uri: string;
  response_type: "token";
}
