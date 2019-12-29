import Container from "@material-ui/core/Container";
import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { GuardedRoute } from "modules/shared/components/GuardedRoute";
import { NavBar } from "modules/shared/components/NavBar";
import { Category } from "modules/category/Category";
import { Auth } from "modules/auth/Auth";
import { StartPage } from "modules/startpage/StartPage";
import { LinearProgress } from "modules/shared/components/LinearProgress";

// SSR incompatible!
// see https://reactjs.org/docs/code-splitting.html#reactlazy
const Browse = React.lazy(() =>
  import(/* webpackChunkName: "browse" */ "modules/browse/Browse")
);
const Playlist = React.lazy(() =>
  import(/* webpackChunkName: "playlist" */ "modules/playlist/Playlist")
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
