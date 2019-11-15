import { getSpotifyAuthUrl, setPostAuthTarget } from "modules/auth/utils/auth";
import { useLocation } from "react-router-dom";

export const Login = () => {
  const { state } = useLocation();
  const redirectedFrom = state && state.redirectedFrom;

  if (redirectedFrom) {
    setPostAuthTarget(redirectedFrom);
  }

  window.location.replace(getSpotifyAuthUrl());

  return null;
};
