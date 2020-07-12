import { fetchClient } from "lib/http/api-methods";
import { UserPrivate } from "values";

async function getCurrentUser(): Promise<UserPrivate> {
  return (await fetchClient.getData<UserPrivate>(`/me`))!;
}

export const ME_API = {
  getCurrentUser
};
