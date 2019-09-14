import React from "react";
import ContainerDefault from "components/ContainerDefault";
import ContainerStartPage from "components/ContainerStartPage";
import { Route, Switch } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={ContainerStartPage} />
      <Route component={ContainerDefault} />
    </Switch>
  );
};

export default App;
