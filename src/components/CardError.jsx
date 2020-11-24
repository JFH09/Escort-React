import React from "react";
import { Link } from "react-router-dom";
import "../Estilos/CardError.css";

const CardError = () => {
  const imagen =
    "https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569_960_720.jpg";
  return (
    <div className="contaner con_padding">
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <div className="card_wrap card-1">
            <img src={imagen} alt="" className="dots_img"></img>
            <div className="card_head">
              Error al, <br></br> Iniciar, <br></br> vuelve a intentar
            </div>

            <div className="health_container tip-1">Aviso!!!</div>
            <div className="card_body">
              No se pudo encontrar el usuario que digitaste...
            </div>
            <Link to={`/Ingresar/`}>
              <button class="btn_container btn-1">volver</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardError;
