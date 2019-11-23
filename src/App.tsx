import Container from "@material-ui/core/Container";
import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { GuardedRoute } from "modules/shared/components/GuardedRoute";
import { NavBar } from "modules/shared/components/NavBar";
import { Categories } from "pages/Categories";
import { Category } from "pages/Category";
import { Auth } from "pages/Auth";
import { StartPage } from "pages/StartPage";
import { useDispatch } from "react-redux";
import { initialLoad } from "modules/nav/store/actions";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialLoad());
  }, [dispatch]);

  return (
    <Switch>
      <Route exact path="/">
        <StartPage />
      </Route>
      <Route>
        <NavBar />

        <Container maxWidth="lg">
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
        </Container>
      </Route>
    </Switch>
  );
};
