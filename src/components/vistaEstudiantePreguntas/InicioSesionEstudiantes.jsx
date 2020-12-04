import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../SignUp.css";
//import Popup from "reactjs-popup";
//import PopupC from "./PopupC";
import PanelEstudiantes from "./PanelEstudiantes";
import {
  basedeDatos,
  autenticacion,
} from "../../configuracion/Config_DB_Firebase";

const SignUp = () => {
  const estadoInicalInicioUsuario = {
    email: "",
    contraseña: "EscortColegioOfelia##1",
  };
  const [estadoInicioUsuario, setEstadoInicioUsuario] = useState(
    estadoInicalInicioUsuario
  );

  const estadoInicialConexionUsuario = {
    entrar: false,
  };
  const [estadoConexionUsuario, setEstadoConexionUsuario] = useState(
    estadoInicialConexionUsuario
  );

  const manejoCambioInput = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setEstadoInicioUsuario({
      ...estadoInicioUsuario,
      [name]: value,
    });
  };
  const manejarInicioSesion = (e) => {
    e.preventDefault(); //hacer lo de lo cambios...y el inico de sesion...
    console.log(estadoInicioUsuario);

    setEstadoInicioUsuario({
      ...estadoInicalInicioUsuario, //se pone en blanco de nuevo
    });

    autenticacion
      .signInWithEmailAndPassword(
        estadoInicioUsuario.email,
        estadoInicioUsuario.contraseña
      )
      .then((resp) => {
        setEstadoConexionUsuario({
          entrar: true,
        });
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-email":
            setEstadoConexionUsuario({
              entrar: false,
            });
            break;
          case "auth/user-disabled":
            setEstadoConexionUsuario({
              ...estadoConexionUsuario,
              entrar: false,
            });
            break;
          case "auth/user-not-found":
            setEstadoConexionUsuario({
              ...estadoConexionUsuario,
              entrar: false,
            });
            break;
          case "auth/wrong-password":
            console.log(error.message);

            setEstadoConexionUsuario({
              ...estadoConexionUsuario,
              entrar: false,
            });
            break;
          default:
            console.log("no se encontro el error..");

            setEstadoConexionUsuario({
              ...estadoConexionUsuario,
              entrar: false,
            });

            break;
        }

        setEstadoConexionUsuario({
          ...estadoConexionUsuario,
          entrar: false,
        });
      });

    console.log("entrando a ESCORT... ", estadoInicioUsuario);
    setEstadoConexionUsuario({
      ...estadoInicialConexionUsuario,
    });
  };

  /* const authListener = () => {
    autenticacion.onAuthStateChanged((estadoInicioUsuario) => {
      if (estadoInicioUsuario) {
        setEstadoConexionUsuario(estadoInicioUsuario);
      } else {
        setEstadoConexionUsuario("");
      }
    });
  };
  useEffect(() => {
    authListener();
  }, []);*/
  const id = "";
  const agregarEditarUsuario = async (objetoDePopupC) => {
    console.log("objetoContraseña ==&", objetoDePopupC.contraseña);
    await autenticacion
      .createUserWithEmailAndPassword(
        objetoDePopupC.email,
        objetoDePopupC.contraseña
      )
      .then((resultado) => {
        console.log("Agregando ...", objetoDePopupC);
        basedeDatos
          .collection("informacion")
          .doc("informacionUsuarios")
          .collection("usuarios")
          .doc()
          .set(objetoDePopupC)
          .catch((error) => {
            console.log(error);
          });
        console.log("Usuario Agregado...");
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
          case "auth/weak-password":
          default:
            console.log("no se encontro el error..");
            break;
        }
      });
    console.log("correo para Escort Creado...");
  };

  const pasoUsuario = (entra) => {
    if (entra === true) {
      console.log("puede entrar");
      return "PanelEstudiantes";
    } else {
      console.log("lo sineto pero no.");
      return "PanelEstudiantes"; //Lo deje asi para seguir progrando la app deberia ir un "Ingresar"
    }
  };
  return (
    <div className="main login">
      <div className="container">
        <center>
          <div className="middle">
            <div id="login">
              <form method="get" onSubmit={manejarInicioSesion}>
                <fieldset className="clearfix">
                  <p>
                    <span className="fa fa-user"></span>
                    <input
                      type="text"
                      placeholder="Email"
                      name="email"
                      onChange={manejoCambioInput}
                      required
                    ></input>
                  </p>
                  <p>
                    <span className="fa fa-lock"></span>
                    <input
                      name="contraseña"
                      type="password"
                      placeholder="Contraseña"
                      defaultValue="EscortColegioOfelia##1"
                      readOnly="readOnly"
                      required
                    ></input>
                  </p>
                  <div>
                    <span className="recordarContraseña">
                      <a className="small-text recordarContraseña" href="#">
                        Forgot password?
                      </a>
                    </span>
                    <span className="botonEntrar">
                      <Link
                        to={`/PanelEstudiantes/${estadoInicioUsuario.email}`}
                      >
                        <input type="submit" value="Sign In"></input>
                      </Link>
                    </span>
                  </div>
                </fieldset>
                <div className="clearfix"></div>
              </form>

              <div className="clearfix"></div>
            </div>
            <div className="logo">
              Escort
              <div className="clearfix"></div>
            </div>
          </div>
        </center>
      </div>
    </div>
  );
};

export default SignUp;
