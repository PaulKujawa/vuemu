import Container from "@material-ui/core/Container";
import NavBar from "components/NavBar";
import Categories from "views/Categories";
import Login from "views/Login";
import LoginCheck from "views/LoginCheck";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Category from "views/Category";
import GuardedRoute from "components/GuardedRoute";

const ContainerDefault: React.FC = () => {
  return (
    <div>
      <NavBar />

      <Container maxWidth="lg">
        <Switch>
          <GuardedRoute path="/categories" component={Categories} />
          <GuardedRoute path="/category/:id" component={Category} />
          <Route path="/login" component={Login} />
          <Route path="/login-check" component={LoginCheck} />
          {/* TODO 404 page via <Route component={NoMatch} /> */}
        </Switch>
      </Container>
    </div>
  );
};

export default ContainerDefault;
