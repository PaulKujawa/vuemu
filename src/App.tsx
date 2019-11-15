import React from "react";
import { ContainerDefault } from "modules/shared/components/ContainerDefault";
import { ContainerStartPage } from "modules/shared/components/ContainerStartPage";
import { Route, Switch } from "react-router-dom";

export const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <ContainerStartPage />
      </Route>
      <Route>
        <ContainerDefault />
      </Route>
    </Switch>
  );
};
