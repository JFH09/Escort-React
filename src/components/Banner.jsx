import React from "react";
import { Link } from "react-router-dom";
const Banner = () => (
  <div
    id="carouselExampleIndicators"
    class="carousel slide "
    data-ride="carousel"
  >
    <ol class="carousel-indicators">
      <li
        data-target="#carouselExampleIndicators"
        data-slide-to="0"
        class="active"
      ></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img //1920x1080
          src="https://www.secciona2.com/wp-content/uploads/2019/06/Obra-de-Arquitectura-Colegio-Ofelia-Uribe-Acosta-13.jpg"
          alt="..."
          class="imagenesBanner"
        ></img>
        <div class="carousel-caption ">
          <h1>Colegio Rafael Uribe de Acosta</h1>
          <button type="button" class="btn btn-outline-info botonBanner">
            Conocer más...
          </button>
        </div>
      </div>
      <div class="carousel-item ">
        <img
          class="d-block w-100 imagenesBanner"
          src="https://vilmanunez.com/wp-content/uploads/2018/07/como-hacer-un-banner.png"
          alt="Second slide"
        ></img>
        <div class="carousel-caption ">
          <h1>Escort</h1>
          <Link to={`/Ingresar/`}>
            <button type="button" class="btn btn-outline-info botonBanner">
              Entrar al Inicio de Escort
            </button>
          </Link>
        </div>
      </div>
      <div class="carousel-item">
        <img
          className="d-block w-100 imagenesBanner"
          src="https://cdn.pixabay.com/photo/2016/03/09/10/37/light-bulb-1246043_960_720.jpg"
          alt="Third slide"
        ></img>
        <div className="carousel-caption ">
          <h1>Que Queremos Llegar Hacer</h1>
          <button type="button" class="btn btn-outline-info botonBanner">
            Sobre Nosotros...
          </button>
        </div>
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
);

export default Banner;
