import { getUrl, getHeaders } from "lib/http/utils";

export async function httpGet<DTO>(path: string): Promise<DTO> {
  const url = getUrl(path);
  const headers = getHeaders();

  const res = await fetch(url, { headers });
  const data = await res.json();

  if (!res.ok) {
    throw data;
  }

  return data;
}
