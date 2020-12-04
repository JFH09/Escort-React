import React from "react";
import { Link, useParams } from "react-router-dom";
import "../Estilos/SeccionPreguntasEstd.css";
import SeccionRespuestas from "./SeccionRespuestas";

const Preguntas = () => {
  const usuario = useParams();
  return (
    <div data-spy="scroll" className=" cuerpoPreguntas">
      <div className="container-fluid row ">
        <SeccionRespuestas />
      </div>
    </div>
  );
};

export default Preguntas;
