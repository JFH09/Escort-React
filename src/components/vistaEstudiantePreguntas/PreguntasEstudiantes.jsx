import React from "react";
import "../../Estilos/SeccionPreguntas.css";
import SeccionRespuestas from "./SeccionRespuestas";

const PreguntasEstudiantes = () => {
  return (
    <div data-spy="scroll" className=" cuerpoPreguntas">
      <div className="container-fluid row ">
        <SeccionRespuestas />
      </div>
    </div>
  );
};

export default PreguntasEstudiantes;
