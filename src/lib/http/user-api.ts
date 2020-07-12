import { UserPrivate } from "values";
import { fetchClient } from "./api-methods";

async function getCurrentUser(): Promise<UserPrivate> {
  return (await fetchClient.getData<UserPrivate>(`/me`))!;
}

export const ME_API = {
  getCurrentUser
};
