import { mapAuthResponseSuccess } from "modules/auth/utils/auth";
import { AuthResponse } from "modules/auth/models/auth-response";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "modules/auth/store/actions";
import { parseQuery } from "modules/shared/utils/parse-query";

export const LoginCheck = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const authResponse = parseQuery<AuthResponse>(location.hash);

  if ("access_token" in authResponse) {
    const auth = mapAuthResponseSuccess(authResponse);
    dispatch(loginSuccess(auth));
  }

  // TODO handle failed or rather denied authentication
  return null;
};
