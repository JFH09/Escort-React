import React from "react";
import "./App.css";
import Error404 from "./components/Error404";
import Navigation from "./components/Navigation";
import SignUp from "./components/SignUp";
import Banner from "./components/Banner";
import InicioPanelEscort from "./components/InicioPanelEscort";
import CRUDEstudiantes from "./components/CRUDEstudiantes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const App = () => (
  <Router>
    <Navigation />
    <Switch>
      <Route path="/" exact component={Banner} />
      <Route path="/Ingresar" component={SignUp} />
      <Route path="/InicioPanelEscort/:usuario" component={InicioPanelEscort} />
      <Route path="/:usuario/CRUDEstudiantes" component={CRUDEstudiantes} />

      <Route component={() => <Error404 />} />
    </Switch>
  </Router>
);

export default App;
