import { mapAuthResponseSuccess } from "modules/auth/utils/auth";
import { AuthResponse } from "modules/auth/models/auth-response";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authViaLoginSuccess, authViaLogin } from "modules/auth/store/actions";
import { parseQuery } from "modules/shared/utils/parse-query";

export const Auth = () => {
  const location = useLocation<{ redirectedFrom: string }>();
  const dispatch = useDispatch();

  const authResponse = parseQuery<AuthResponse>(location.hash);

  if ("access_token" in authResponse) {
    const auth = mapAuthResponseSuccess(authResponse);
    dispatch(authViaLoginSuccess(auth));
  } else {
    dispatch(authViaLogin(location.state && location.state.redirectedFrom));
  }

  return null;
};
