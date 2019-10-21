import Container from "@material-ui/core/Container";
import NavBar from "components/NavBar";
import { Categories } from "views/Categories";
import Login from "views/Login";
import LoginCheck from "views/LoginCheck";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { Category } from "views/Category";
import GuardedRoute from "components/GuardedRoute";

const ContainerDefault = () => {
  return (
    <div>
      <NavBar />

      <Container maxWidth="lg">
        <Switch>
          <GuardedRoute path="/categories/:id">
            <Category />
          </GuardedRoute>
          <GuardedRoute path="/categories">
            <Categories />
          </GuardedRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/login-check">
            <LoginCheck />
          </Route>
          {/* TODO 404 page */}
        </Switch>
      </Container>
    </div>
  );
};

export default ContainerDefault;
