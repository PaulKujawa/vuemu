import { isAuthenticated } from "modules/auth/utils/auth";
import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, useLocation } from "react-router-dom";
import { AppState } from "store";

/*
 * see https://reacttraining.com/react-router/web/example/auth-workflow
 *
 * container component that holds back the `component` prop and registers a `render` cb instead
 * the `render` cb becomes invoked if the route matches (part of the `rest` props)
 * which then decides based on auth if either the component or a redirect is rendered
 */

interface Props {
  [prop: string]: any;
}

export const GuardedRoute = ({ children, ...rest }: Props) => {
  const location = useLocation();
  const authenticated = useSelector(({ user }: AppState) =>
    isAuthenticated(user)
  );

  return (
    <Route
      {...rest}
      render={() =>
        authenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { redirectedFrom: location }
            }}
          />
        )
      }
    />
  );
};
