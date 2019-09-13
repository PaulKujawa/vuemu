import React from "react";
import ContainerDefault from "components/ContainerDefault";
import { Route, Switch } from "react-router-dom";
import ContainerStartPage from "components/ContainerStartPage";

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={ContainerStartPage} />
      <Route component={ContainerDefault} />
    </Switch>
  );
};

export default App;
