import React from "react";
import "../Estilos/ListaAccionesPanel.css";

const ListaAccionesPanel = () => {
  const imagen =
    "https://i.dlpng.com/static/png/5404477-dotted-background-png-abeoncliparts-cliparts-vectors-for-dot-texture-png-715_715_preview.png";
  return (
    <div className="contaner con_padding">
      <div className="row">
        <div className="col-12 col-lg-4 d-flex justify-content-center">
          <div className="card_wrap card-1">
            <img src={imagen} alt="" className="dots_img"></img>
            <div className="card_head">
              AGREGAR, <br></br> Editar, <br></br> Estudiantes
            </div>

            <div className="health_container tip-1">opciones?????</div>
            <div className="card_body">
              Esta opcion es para poder registrar los estudiantes en el
              respectivo curso...
            </div>
            <button class="btn_container btn-1">Ir</button>
          </div>
        </div>
        <div className="col-12 col-lg-4 d-flex justify-content-center">
          <div className="card_wrap card-2">
            <img src={imagen} alt="" className="dots_img"></img>
            <div className="card_head">
              Consultar, <br></br> Responder, <br></br> Preguntas
            </div>

            <div className="health_container tip-2">opciones?????</div>
            <div className="card_body">
              Esta opcion es para poder registrar los estudiantes en el
              respectivo curso...
            </div>
            <button className="btn_container btn-2">Ir</button>
          </div>
        </div>
        <div className="col-12 col-lg-4 d-flex justify-content-center">
          <div className="card_wrap card-3">
            <img src={imagen} alt="" className="dots_img"></img>
            <div className="card_head">
              Editar, <br></br> Configurar, <br></br> Mi Perfil
            </div>

            <div className="health_container tip-3">opciones?????</div>
            <div className="card_body">
              Esta opcion es para poder registrar los estudiantes en el
              respectivo curso...
            </div>
            <button className="btn_container btn-3">Ir</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListaAccionesPanel;
