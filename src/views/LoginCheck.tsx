import React from "react";
import { RouteComponentProps, Redirect } from "react-router-dom";
import { store } from "redux/store";
import { getPostAuthTarget, mapSpotifyAuthRes } from "utils/auth";

const LoginCheck: React.FC<RouteComponentProps> = props => {
  const spotifyResponse = mapSpotifyAuthRes(props.location.hash);
  if ("access_token" in spotifyResponse) {
    store.commit("authenticate", spotifyResponse);
  }

  return <Redirect to={getPostAuthTarget()} />;
};

export default LoginCheck;
