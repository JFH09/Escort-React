import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import SignUp from "./components/SignUp";
import Banner from "./components/Banner";
import InicioPanelEscort from "./components/InicioPanelEscort";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const App = () => (
  <Router>
    <Navigation />
    <Switch>
      <Route path="/" exact component={Banner} />
      <Route path="/Ingresar" component={SignUp} />
      <Route path="/InicioPanelEscort" component={InicioPanelEscort} />

      <Route
        component={() => (
          <div className="">
            <h1>Error 404</h1>
            <span>Pagina No Encontrada</span>
          </div>
        )}
      />
    </Switch>
  </Router>
);

export default App;
