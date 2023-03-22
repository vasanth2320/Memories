import React from "react";
import { Container } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";

import Navbar from "../components/Navbar/navbar.component";
import Home from "../components/home/home";
import Auth from "../components/auth/auth";

const App = () => {

  return (
    <Container maxWidth="lg">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" exact component={Auth} />
      </Switch>
    </Container>
  );
};

export default App;
