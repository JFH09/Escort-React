import React from "react";
import { useParams, Link } from "react-router-dom";
import useObtenerListaEstudiantes from "./customHooks/useObtenerListaEstudiantes";
import BotonFlotante from "./BotonFlotante";
import "../Estilos/ConsultarEstudiantes.css";

const ConsultarEstudiantes = () => {
  const imagen =
    "https://cdn.pixabay.com/photo/2014/09/19/12/30/pencils-452238_960_720.jpg";
  const { usuario } = useParams();
  console.log("desde consultar Estudiantes, entro...", usuario);

  const primero = "Primero";
  const cuarto = "Cuarto";
  return (
    <div>
      <div>
        <BotonFlotante />
        <div className="contaner con_padding">
          <div className="row">
            <div className="col-12 col-lg-4 d-flex justify-content-center">
              <div className="card_wrap card-1">
                <Link to={`/${usuario}/CRUDEstudiantes/Curso/${primero}`}>
                  <img src={imagen} alt="" className="dots_img"></img>
                </Link>
                <div className="card_head">
                  Estudiantes, <br></br> Curso - <br></br> Primero
                </div>

                <div className="health_container tip-1">
                  Informacion Estudiantes
                </div>
                <div className="card_body">
                  En esta opcion puedes ver los estudiantes que pertenecen a
                  cada salon respecto a primaria
                </div>
                <Link to={`${usuario}/Curso/${primero}`}>
                  <button class="btn_container btn-1">Ir</button>
                </Link>
              </div>
            </div>

            <div className="col-12 col-lg-4 d-flex justify-content-center">
              <div className="card_wrap card-2">
                <img src={imagen} alt="" className="dots_img"></img>
                <div className="card_head">
                  Estudiantes, <br></br> Curso - <br></br> Segundo
                </div>

                <div className="health_container tip-2">
                  Informacion Estudiantes
                </div>
                <div className="card_body">
                  En esta opcion puedes ver los estudiantes que pertenecen a
                  cada salon respecto a primaria
                </div>
                <button className="btn_container btn-2">Ir</button>
              </div>
            </div>
            <div className="col-12 col-lg-4 d-flex justify-content-center">
              <div className="card_wrap card-3">
                <img src={imagen} alt="" className="dots_img"></img>
                <div className="card_head">
                  Estudiantes, <br></br> Curso - <br></br> Tercero
                </div>

                <div className="health_container tip-3">
                  Informacion Estudiantes
                </div>
                <div className="card_body">
                  En esta opcion puedes ver los estudiantes que pertenecen a
                  cada salon respecto a primaria
                </div>
                <button className="btn_container btn-3">Ir</button>
              </div>
            </div>
            <div className="col-12 col-lg-4 d-flex justify-content-center">
              <div className="card_wrap card-4">
                <Link to={`/${usuario}/CRUDEstudiantes/Curso/${cuarto}`}>
                  <img src={imagen} alt="" className="dots_img"></img>
                </Link>
                <div className="card_head">
                  Estudiantes, <br></br> Curso - <br></br> Cuarto
                </div>

                <div className="health_container tip-4">
                  Informacion Estudiantes
                </div>
                <div className="card_body">
                  En esta opcion puedes ver los estudiantes que pertenecen a
                  cada salon respecto a primaria
                </div>
                <Link to={`/${usuario}/CRUDEstudiantes/Curso/${cuarto}`}>
                  <button class="btn_container btn-4">Ir</button>
                </Link>
              </div>
            </div>
            <div className="col-12 col-lg-4 d-flex justify-content-center">
              <div className="card_wrap card-5">
                <Link to={`/${usuario}/CRUDEstudiantes/Curso/${primero}`}>
                  <img src={imagen} alt="" className="dots_img"></img>
                </Link>
                <div className="card_head">
                  Estudiantes, <br></br> Curso - <br></br> Quinto
                </div>

                <div className="health_container tip-5">
                  Informacion Estudiantes
                </div>
                <div className="card_body">
                  En esta opcion puedes ver los estudiantes que pertenecen a
                  cada salon respecto a primaria
                </div>
                <Link to={`/${usuario}/CRUDEstudiantes`}>
                  <button class="btn_container btn-5">Ir</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultarEstudiantes;
