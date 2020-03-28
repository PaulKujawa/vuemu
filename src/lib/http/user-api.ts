import { httpGet } from "lib/http/api-methods";
import { UserPrivate } from "lib/types";

async function getCurrentUser(): Promise<UserPrivate> {
  return (await httpGet<UserPrivate>(`/me`))!;
}

export const ME_API = {
  getCurrentUser
};
