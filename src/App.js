import React from "react";
import "./App.css";
import Error404 from "./components/Error404";
import Navigation from "./components/Navigation";
import SignUp from "./components/SignUp";
import Banner from "./components/Banner";
import InicioPanelEscort from "./components/InicioPanelEscort";
import CRUDEstudiantes from "./components/CRUDEstudiantes";
import ConsultarEstudiantes from "./components/ConsultarEstudiantes";
import Curso from "./components/Curso";
import Preguntas from "./components/Preguntas";
import FormularioEditEstudiante from "./components/FormularioEditEstudiante";
import InicioSesionEstudiantes from "./components/vistaEstudiantePreguntas/InicioSesionEstudiantes";
import PanelEstudiantes from "./components/vistaEstudiantePreguntas/PanelEstudiantes";
import PreguntasEstudiantes from "./components/vistaEstudiantePreguntas/PreguntasEstudiantes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootswatch/dist/sketchy/bootstrap.min.css";
const App = () => (
  <Router>
    <Navigation />
    <Switch>
      <Route path="/" exact component={Banner} />
      <Route path="/Ingresar" component={SignUp} />
      <Route
        path="/InicioSesionEstudiantes"
        component={InicioSesionEstudiantes}
      />
      <Route path="/PanelEstudiantes/:usuario" component={PanelEstudiantes} />
      <Route path="/InicioPanelEscort/:usuario" component={InicioPanelEscort} />
      <Route
        path="/:usuario/PreguntasEstudiantes"
        component={PreguntasEstudiantes}
      />
      <Route
        path="/InicioSesionEstudiantes/:usuario"
        component={InicioSesionEstudiantes}
      />
      <Route
        path="/:usuario/CRUDEstudiantes/Curso/:curso/FormularioEditEstudiante/:nombre/:apellido/:curso/:identificador/:numero"
        component={FormularioEditEstudiante}
      />
      <Route path="/:usuario/CRUDEstudiantes/Curso/:curso" component={Curso} />
      <Route path="/:usuario/CRUDEstudiantes" component={CRUDEstudiantes} />
      <Route
        path="/:usuario/ConsultarEstudiantes"
        component={ConsultarEstudiantes}
      />
      <Route path="/:usuario/Preguntas" component={Preguntas} />

      <Route component={() => <Error404 />} />
    </Switch>
  </Router>
);

export default App;
