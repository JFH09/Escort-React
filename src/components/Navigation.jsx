import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => (
  <div className="barra">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark color-Barra">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon">Boton</span>
      </button>
      <NavLink className="navbar-brand aLogo " to={`/`}>
        Escort
      </NavLink>

      <div className="collapse navbar-collapse menuhamb " id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0 menuhamb">
          <li className="nav-item active menuhamb">
            <NavLink className="nav-link menuhamb" to={`/Ingresar/`}>
              Inicio <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link menuhamb" to="#">
              Como Funciona
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Navigation;
