import React from "react";
import "../Estilos/SeccionPreguntasEstd.css";
import SeccionRespuestas from "./SeccionRespuestas";

const Preguntas = () => {
  return (
    <div data-spy="scroll" className=" cuerpoPreguntas">
      <div className="container-fluid row ">
        <SeccionRespuestas />
      </div>
    </div>
  );
};

export default Preguntas;
