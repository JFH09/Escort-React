import React from "react";
import { Link } from "react-router-dom";
import "../Estilos/BotonFlotante.css";
import { fbConfig } from "../configuracion/Config_DB_Firebase";

const BotonFlotante = () => {
  const manejoSalir = () => {
    console.log("Saliendo de la cuenta...");
    fbConfig.auth().signOut();
  };
  return (
    <Link to={`/Ingresar/`} onClick={manejoSalir}>
      <a href="#" class="btn-flotante">
        Salir
      </a>
    </Link>
  );
};

export default BotonFlotante;
