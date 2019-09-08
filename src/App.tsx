import Container from "@material-ui/core/Container";
import React from "react";
import NavBar from "./components/NavBar";
import StartPage from "./views/StartPage";

const App: React.FC = () => {
  return (
    <div>
      <NavBar />

      <Container maxWidth="lg">
        <StartPage />
      </Container>
    </div>
  );
};

export default App;
