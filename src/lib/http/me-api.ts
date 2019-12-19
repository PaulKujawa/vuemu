import { httpGet } from "lib/http/api";
import { UserPrivate } from "lib/types";

function getCurrentUser(): Promise<UserPrivate> {
  return httpGet<UserPrivate>(`/me`);
}

export const ME_API = {
  getCurrentUser
};
