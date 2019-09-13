import { webStorage } from "utils/web-storage";
import { AuthResponseSuccess } from "models/authentication";

// TODO replace with Redux

interface StateAuth {
  accessToken: string;
  expiration: number;
}

interface State {
  auth: { loggedIn: false } | ({ loggedIn: true } & StateAuth);
}

const VUEX_WEB_STORAGE_KEY = "vuex-auth";

const state = {
  auth: ((): State["auth"] => {
    const storage = webStorage.getItem<StateAuth>(VUEX_WEB_STORAGE_KEY);

    return { ...storage, loggedIn: !!storage as any };
  })()
};

const mutations = {
  authenticate(state: State, response: AuthResponseSuccess) {
    const date = new Date();
    const expiration = date.getTime() + response.expires_in * 1000;
    const storage = { accessToken: response.access_token, expiration };

    state.auth = { ...storage, loggedIn: true };
    webStorage.setItem(VUEX_WEB_STORAGE_KEY, storage);
  }
};

const getters = {
  auth: ({ auth }: State): State["auth"] => {
    if (!auth.loggedIn) {
      return auth;
    }

    const date = new Date();
    const now = date.getTime();

    if (now < auth.expiration) {
      return auth;
    }

    return { loggedIn: false };
  }
};

export const store = {
  getters: { auth: getters.auth(state) },
  commit: (action: "authenticate", spotifyResponse: AuthResponseSuccess) => {
    mutations.authenticate(state, spotifyResponse);
  }
};
