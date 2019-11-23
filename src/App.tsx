import Container from "@material-ui/core/Container";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { GuardedRoute } from "modules/shared/components/GuardedRoute";
import { NavBar } from "modules/shared/components/NavBar";
import { Categories } from "pages/Categories";
import { Category } from "pages/Category";
import { Auth } from "pages/Auth";
import { StartPage } from "pages/StartPage";

export const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <StartPage />
      </Route>

      <Route>
        <NavBar />
        <Container maxWidth="lg">
          <Switch>
            <GuardedRoute path="/categories/:id">
              <Category />
            </GuardedRoute>
            <GuardedRoute path="/categories">
              <Categories />
            </GuardedRoute>
            <Route path="/auth">
              <Auth />
            </Route>
            {/* TODO 404 page */}
          </Switch>
        </Container>
      </Route>
    </Switch>
  );
};
