import Container from "@material-ui/core/Container";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "components/NavBar";
import RouterOutlet from "components/RouterOutlet";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <NavBar />

        <Container maxWidth="lg">
          <RouterOutlet />
        </Container>
      </div>
    </Router>
  );
};

export default App;
