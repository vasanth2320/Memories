import React from "react";
import { Container } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";

import Navbar from "../routes/navigation/navigation.route";
import Home from "../routes/home/home.route";
import Auth from "../routes/authentication/authentication.route";

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
