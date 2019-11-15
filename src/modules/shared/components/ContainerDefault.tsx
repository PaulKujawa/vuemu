import Container from "@material-ui/core/Container";
import { NavBar } from "modules/shared/components/NavBar";
import { Categories } from "pages/Categories";
import { Login } from "pages/Login";
import { LoginCheck } from "pages/LoginCheck";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { Category } from "pages/Category";
import { GuardedRoute } from "modules/shared/components/GuardedRoute";

export const ContainerDefault = () => {
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
