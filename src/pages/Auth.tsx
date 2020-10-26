import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { AuthActions } from "store";
import { mapAuthResponseSuccess, parseQuery } from "utils";
import { AuthResponse } from "values";

export const Auth = () => {
  // no Login component needed as Spotify's OAuth is used.
  const dispatch = useDispatch();
  const location = useLocation();

  const authResponse = parseQuery<AuthResponse>(location.hash);

  if ("access_token" in authResponse) {
    const auth = mapAuthResponseSuccess(authResponse);
    dispatch(AuthActions.loginSuccess(auth));
  }

  // TODO handle failed or rather denied authentication
  return null;
};
