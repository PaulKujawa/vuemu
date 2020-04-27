import camelcaseKeysDeep from "camelcase-keys-deep";
import decamelizeKeysDeep from "decamelize-keys-deep";
import { composeApiUrl } from "lib/http/utils";

const FetchClient = () => {
  let authToken: string | null = null;

  const getHeaders = () => {
    const headers: { [header: string]: string } = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };

    if (authToken) {
      headers.Authorization = `Bearer ${authToken}`;
    }

    return headers;
  };

  const getResponseBody = async function<DTO>(
    response: Response
  ): Promise<DTO | null> {
    if (!response.ok) {
      throw new Error(String(response.status));
    }

    if (response.status === 204) {
      return null;
    }

    const result = await response.json();

    return camelcaseKeysDeep(result);
  };

  return {
    setAuthToken(value: string) {
      authToken = value;
    },
    async getData<DTO = unknown>(path: string): Promise<DTO | null> {
      const response = await fetch(composeApiUrl(path), {
        headers: getHeaders()
      });

      return getResponseBody<DTO>(response);
    },

    async postData<DTO = unknown>(
      path: string,
      payload: any
    ): Promise<DTO | null> {
      const response = await fetch(composeApiUrl(path), {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify(decamelizeKeysDeep(payload))
      });

      return getResponseBody<DTO>(response);
    },

    async putData<DTO = unknown>(
      path: string,
      payload: any
    ): Promise<DTO | null> {
      const response = await fetch(composeApiUrl(path), {
        method: "PUT",
        headers: getHeaders(),
        body: JSON.stringify(decamelizeKeysDeep(payload))
      });

      return getResponseBody<DTO>(response);
    },

    async deleteData<DTO = unknown>(path: string): Promise<DTO | null> {
      const response = await fetch(composeApiUrl(path), {
        method: "DELETE",
        headers: getHeaders()
      });

      return getResponseBody<DTO>(response);
    }
  };
};

export const fetchClient = FetchClient();
