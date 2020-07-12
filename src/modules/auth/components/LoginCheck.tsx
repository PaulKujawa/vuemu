import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { parseQuery } from "modules/shared";
import { AuthResponse, AuthActions, mapAuthResponseSuccess } from "..";

export const LoginCheck = () => {
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
