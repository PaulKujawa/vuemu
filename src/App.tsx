import React from "react";
import ContainerDefault from "components/ContainerDefault";
import ContainerStartPage from "components/ContainerStartPage";
import { Route, Switch } from "react-router-dom";

const App: React.FC = () => {
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

export default App;
