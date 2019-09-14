import { AuthResponseSuccess, AuthResponse } from "models/authentication";
import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, Redirect } from "react-router-dom";
import { AppState } from "store";
import { authenticate } from "store/user/actionCreators";
import { isAuthenticated } from "store/user/reducers";
import { getPostAuthTarget } from "utils/auth";

interface Props extends RouteComponentProps {
  authenticated: boolean;
  onAuthenticate: (response: AuthResponseSuccess) => void;
}

const LoginCheck: React.FC<Props> = props => {
  const spotifyResponse: AuthResponse = props.location.hash
    .substring(1)
    .split("&")
    .map(keyValue => keyValue.split("="))
    .reduce((acc: any, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});

  // could check for props and spread only them for savety :shrug:
  if ("access_token" in spotifyResponse) {
    props.onAuthenticate(spotifyResponse);
    return <Redirect to={getPostAuthTarget("/categories")} />;
  }

  return <Redirect to={getPostAuthTarget("/")} />;
};

const mapStateToProps = ({ user }: AppState) => ({
  authenticated: isAuthenticated(user)
});

const mapDispatchToProps = (dispatch: Function) => ({
  onAuthenticate(response: AuthResponseSuccess) {
    dispatch(authenticate(response));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginCheck);
