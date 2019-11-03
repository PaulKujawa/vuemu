import { AuthResponse } from "models/authentication";
import React from "react";
import { useDispatch } from "react-redux";
import { Redirect, useLocation } from "react-router-dom";
import { authenticate } from "store/user/actionCreators";
import { getPostAuthTarget } from "utils/auth";

export const LoginCheck = () => {
  const { hash } = useLocation();
  const dispatch = useDispatch();

  const spotifyResponse: AuthResponse = hash
    .substring(1)
    .split("&")
    .map(keyValue => keyValue.split("="))
    .reduce((acc: any, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});

  if ("access_token" in spotifyResponse) {
    dispatch(authenticate(spotifyResponse));

    return <Redirect to={getPostAuthTarget("/categories")} />;
  }

  return <Redirect to={getPostAuthTarget("/")} />;
};
