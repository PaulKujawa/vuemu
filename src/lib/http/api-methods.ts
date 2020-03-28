import { composeApiUrl } from "lib/http/utils";
import { store } from "store";

export async function httpGet<DTO>(path: string): Promise<DTO | null> {
  const url = composeApiUrl(path);
  const { authToken } = store.getState().auth;

  const res = await fetch(url, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${authToken?.accessToken || ""}`
    }
  });

  if (res.status === 204) {
    return null;
  }

  const data = await res.json();

  if (!res.ok) {
    throw data;
  }

  return data;
}
