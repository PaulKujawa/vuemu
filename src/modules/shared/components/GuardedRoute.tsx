import { isAuthTokenExpired } from "modules/auth/utils";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, useLocation } from "react-router-dom";
import { AppState } from "store";
import { AuthActions } from "modules/auth";

/*
 * see https://reacttraining.com/react-router/web/example/auth-workflow
 *
 * container component that holds back the `component` prop and registers a `render` cb instead
 * the `render` cb becomes invoked if the route matches (part of the `rest` props).
 * What then could switch between redirect and target component.
 * but instead a Redux Action and Redux Saga is used for that.
 */

interface Props {
  [prop: string]: any;
}

export const GuardedRoute = ({ children, ...rest }: Props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isLoggedIn = useSelector(
    ({ auth }: AppState) =>
      !!auth.authToken && !isAuthTokenExpired(auth.authToken.tokenExp)
  );

  if (!isLoggedIn) {
    dispatch(AuthActions.login(location));
    return null;
  }

  return <Route {...rest} render={() => children} />;
};
