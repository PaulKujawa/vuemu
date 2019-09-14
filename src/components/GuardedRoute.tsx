import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { AppState } from "store";
import { isAuthenticated } from "store/user/reducers";

/*
 * see https://reacttraining.com/react-router/web/example/auth-workflow
 *
 * container component that holds back the `component` prop and registers a `render` cb instead
 * the `render` cb becomes invoked if the route matches (part of the `rest` props)
 * which then decides based on auth if either the component or a redirect is rendered
 */

interface Props {
  component: React.FC<any>;
  authenticated: boolean;
  [prop: string]: any;
}

const GuardedRoute: React.FC<Props> = ({
  component: Component,
  authenticated,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (authenticated) {
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

const mapStateToProps = ({ user }: AppState) => ({
  authenticated: isAuthenticated(user)
});

export default connect(mapStateToProps)(GuardedRoute);
