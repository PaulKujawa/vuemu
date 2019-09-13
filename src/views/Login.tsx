import React from "react";
import { getSpotifyAuthUrl, setPostAuthTarget } from "utils/auth";
import { RouteComponentProps } from "react-router-dom";

const Login: React.FC<RouteComponentProps> = props => {
  const state = props.location.state;
  const redirectedFrom = state && state.redirectedFrom;

  if (redirectedFrom) {
    setPostAuthTarget(redirectedFrom);
  }

  window.location.replace(getSpotifyAuthUrl());

  return null;
};

export default Login;
