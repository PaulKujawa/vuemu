import React from "react";
import { Link, LinkProps, Route } from "react-router-dom";
import Categories from "../pages/Categories";
import Login from "../pages/Login";
import LoginCheck from "../pages/LoginCheck";
import StartPage from "../pages/StartPage";

// see https://github.com/ReactTraining/react-router/issues/6056
export const AdapterLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref) => <Link innerRef={ref as any} {...props} />
);

/* 
 Use in MUI to link via 
 component={AdapterLink} to={PATHS.categories}
*/
export const PATHS = {
  startPage: "/",
  categories: "/categories",
  login: "/login",
  loginCheck: "/login-check"
};

const RouterOutlet: React.FC = () => {
  return (
    <div>
      <Route path={PATHS.startPage} exact component={StartPage} />
      <Route path={PATHS.categories} component={Categories} />
      <Route path={PATHS.login} component={Login} />
      <Route path={PATHS.loginCheck} component={LoginCheck} />
    </div>
  );
};

export default RouterOutlet;
