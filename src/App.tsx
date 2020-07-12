import Container from "@material-ui/core/Container";
import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { GuardedRoute, NavBar, LinearProgress } from "modules/shared";
import { Category } from "pages/Category";
import { Auth } from "pages/Auth";
import { StartPage } from "pages/StartPage";

// SSR incompatible! see https://reactjs.org/docs/code-splitting.html#reactlazy
const Browse = React.lazy(() =>
  import(/* webpackChunkName: "browse" */ "pages/Browse")
);
const Playlist = React.lazy(() =>
  import(/* webpackChunkName: "playlist" */ "pages/Playlist")
);

export const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <StartPage />
      </Route>

      <Route>
        <NavBar />

        <Container maxWidth="lg">
          <Suspense fallback={<LinearProgress />}>
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
          </Suspense>
        </Container>
      </Route>
    </Switch>
  );
};
