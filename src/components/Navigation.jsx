import React from "react";

const Navigation = () => (
  <div className="barra">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark color-Barra">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand aLogo " href="#">
        Escort
      </a>

      <div class="collapse navbar-collapse menuhamb " id="navbarTogglerDemo03">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0 menuhamb">
          <li class="nav-item active menuhamb">
            <a class="nav-link menuhamb" href="./vistaLogin.html">
              Inicio <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link menuhamb" href="#">
              Como Funciona
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Navigation;
