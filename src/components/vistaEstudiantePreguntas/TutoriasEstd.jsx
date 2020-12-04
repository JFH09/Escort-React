import React from "react";
import "../../Estilos/SeccionPreguntas.css";
import SeccionTutoriasEstd from "./SeccionTutoriasEstd";

const TutoriasEstd = () => {
  return (
    <div data-spy="scroll" className=" cuerpoPreguntas">
      <div className="container-fluid row ">
        <SeccionTutoriasEstd />
      </div>
    </div>
  );
};

export default TutoriasEstd;
