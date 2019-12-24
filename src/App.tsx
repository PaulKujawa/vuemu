import Container from "@material-ui/core/Container";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { GuardedRoute } from "modules/shared/components/GuardedRoute";
import { NavBar } from "modules/shared/components/NavBar";
import { Browse } from "modules/browse/Browse";
import { Playlist } from "modules/playlist/Playlist";
import { Category } from "modules/category/Category";
import { Auth } from "modules/auth/Auth";
import { StartPage } from "modules/startpage/StartPage";

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
            <GuardedRoute path="/browse">
              <Browse />
            </GuardedRoute>
            <GuardedRoute path="/playlists/:id">
              <Playlist />
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
