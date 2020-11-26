import React from "react";
import { Link } from "react-router-dom";
const Banner = () => (
  <div
    id="carouselExampleIndicators"
    className="carousel slide "
    data-ride="carousel"
  >
    <ol className="carousel-indicators">
      <li
        data-target="#carouselExampleIndicators"
        data-slide-to="0"
        className="active"
      ></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img //1920x1080
          src="https://www.secciona2.com/wp-content/uploads/2019/06/Obra-de-Arquitectura-Colegio-Ofelia-Uribe-Acosta-13.jpg"
          alt="..."
          className="imagenesBanner"
        ></img>
        <div className="carousel-caption ">
          <h1>Colegio Rafael Uribe de Acosta</h1>
          <button type="button" className="btn btn-outline-info botonBanner">
            Escort Estudiantes
          </button>
        </div>
      </div>
      <div className="carousel-item ">
        <img
          className="d-block w-100 imagenesBanner"
          src="https://cdn.pixabay.com/photo/2017/03/12/13/41/beaded-2137080_960_720.jpg"
          alt="Second slide"
        ></img>
        <div className="carousel-caption ">
          <h1>Escort</h1>
          <Link to={`/Ingresar/`}>
            <button type="button" className="btn btn-outline-info botonBanner">
              Escort Profesores
            </button>
          </Link>
        </div>
      </div>
      <div className="carousel-item">
        <img
          className="d-block w-100 imagenesBanner"
          src="https://cdn.pixabay.com/photo/2016/03/09/10/37/light-bulb-1246043_960_720.jpg"
          alt="Third slide"
        ></img>
        <div className="carousel-caption ">
          <h1>Que Queremos Llegar Hacer</h1>
          <button type="button" className="btn btn-outline-info botonBanner">
            Sobre Nosotros...
          </button>
        </div>
      </div>
    </div>
    <a
      className="carousel-control-prev"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a
      className="carousel-control-next"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
);

export default Banner;
