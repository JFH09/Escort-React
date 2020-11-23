import React, { useState } from "react";
import { Link } from "react-router-dom";

const PopupC = (props) => {
  const estadoInicial = {
    nombre: "",
    apellido: "",
    email: "",
    confirmEmail: "",
    institucion: "",
    cargo: "",
    contraseña: "EscortColegioOfelia##1",
    confirmContraseña: "EscortColegioOfelia##1",
  };
  const [estadoUsuario, setEstadoUsuario] = useState(estadoInicial);

  const obtenerCambioInputs = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setEstadoUsuario({
      ...estadoUsuario,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(estadoUsuario);
    props.agregarEditarUsuario(estadoUsuario);

    setEstadoUsuario({
      ...estadoInicial,
    });
  };

  return (
    <div
      className="form-main  container popup-Registro"
      scrolling="yes"
      scrollbars="yes"
      overflow="scroll"
    >
      <Link to={`/`}>
        <button className="close">×</button>
      </Link>
      <div className="header">
        <h3>Registro</h3>
      </div>
      <hr color="white" />
      <form
        scrolling="yes"
        scrollbars="yes"
        className="form popup-Registro form-row "
        overflow="scroll"
        onSubmit={handleSubmit}
      >
        <div className="form-row">
          <div className=" form-group col-md-7 ">
            <label htmlFor="nombre">Nombre</label>
            <br />
            <input
              id="nombre"
              type="text"
              autoComplete="off"
              name="nombre"
              onChange={obtenerCambioInputs}
              value={estadoUsuario.nombre} //es para que el input que vacio
              required
            />
          </div>
          <div className=" form-group col-md-7 ">
            <label htmlFor="apellido">Apellido</label> <br />
            <input
              name="apellido"
              id="apellido"
              type="text"
              autoComplete="off"
              onChange={obtenerCambioInputs}
              value={estadoUsuario.apellido}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className=" form-group col-md-7">
            <label htmlFor="email">E-Mail</label> <br />
            <input
              name="email"
              id="email"
              type="mail"
              autoComplete="off"
              onChange={obtenerCambioInputs}
              value={estadoUsuario.email}
              required
            />
          </div>
          <div className=" form-group col-md-7">
            <label htmlFor="reEmail">Confirmar E-Mail</label> <br />
            <input
              name="confirmEmail"
              id="confirmEmail"
              type="mail"
              autoComplete="off"
              onChange={obtenerCambioInputs}
              value={estadoUsuario.confirmEmail}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className=" form-group col-md-7">
            <label htmlFor="institucion">Instituci&oacute;n</label> <br />
            <select
              name="institucion"
              id="institucion"
              onChange={obtenerCambioInputs}
              value={estadoUsuario.institucion}
              required
            >
              <option value=""></option>
              <option>Colegio Rafael Uribe de Acosta</option>
              <option>Otro</option>
            </select>
          </div>
          <div className="form-group col-md-7">
            <label htmlFor="cargo">Cargo</label> <br />
            <select
              name="cargo"
              id="cargo"
              onChange={obtenerCambioInputs}
              value={estadoUsuario.cargo}
              required
            >
              <option value=""></option>
              <option>Profesor</option>
              <option>Coordinador</option>
              <option>Administrativo</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className=" form-group col-md-7">
            <label htmlFor="contra">Contraseña</label> <br />
            <input
              name="contraseña"
              id="contraseña"
              type="password"
              //onChange={obtenerCambioInputs}
              defaultValue="EscortColegioOfelia##1"
              readOnly="readOnly"
              required
            />
          </div>
          <div className=" form-group col-md-7">
            <label htmlFor="recontra">Confirmar Contraseña</label> <br />
            <input
              name="confirmContraseña"
              id="confirmContraseña"
              type="password"
              //onChange={obtenerCambioInputs}
              defaultValue="EscortColegioOfelia##1"
              readOnly="readOnly"
              required
            />
          </div>
        </div>

        <div className="footer">
          <div className="form-row">
            <div className="form-group col">
              <button className="button boton-Registrar" value="Registrar">
                Registrarme
              </button>
            </div>

            <div className="form-group col">
              <Link to={`/`}>
                <button className="button boton-Cancelar">Cancelar</button>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PopupC;
