import React from "react";
import { getSpotifyAuthUrl, setPostAuthTarget } from "utils/auth";
import { useLocation } from "react-router-dom";

const Login = () => {
  const { state } = useLocation();
  const redirectedFrom = state && state.redirectedFrom;

  if (redirectedFrom) {
    setPostAuthTarget(redirectedFrom);
  }

  window.location.replace(getSpotifyAuthUrl());

  return null;
};

export default Login;
