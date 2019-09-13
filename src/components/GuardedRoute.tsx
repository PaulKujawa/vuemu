import React from "react";
import { Redirect, Route } from "react-router-dom";
import { store } from "redux/store";

/*
 * see https://reacttraining.com/react-router/web/example/auth-workflow
 *
 * container component that holds back the `component` prop and registers a `render` cb instead
 * the `render` cb becomes invoked if the route matches (part of the `rest` props)
 * which then decides based on auth if either the component or a redirect is rendered
 */

interface Props {
  component: React.FC<any>;
  [prop: string]: any;
}

const GuardedRoute: React.FC<Props> = ({ component: Component, ...rest }) => {
  const isAuthenticated = store.getters.auth.loggedIn;

  return (
    <Route
      {...rest}
      render={props => {
        if (isAuthenticated) {
          return <Component {...props} />;
        }

        return (
          <Redirect
            to={{
              pathname: "/login",
              state: { redirectedFrom: props.location }
            }}
          />
        );
      }}
    />
  );
};

export default GuardedRoute;
