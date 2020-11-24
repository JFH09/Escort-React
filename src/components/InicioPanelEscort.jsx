import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./InicioPanelEscort.css";
import ListaAccionesPanel from "./ListaAccionesPanel";
import { basedeDatos } from "../configuracion/Config_DB_Firebase";
import CardError from "./CardError";

const InicioPanelEscort = () => {
  const estadoInicialEncontrado = {
    encontrado: false,
  };
  const [estadoEncontrado, setEstadoEncontrado] = useState(
    estadoInicialEncontrado
  );
  const [informacionUsuarios, setInformacionUsuarios] = useState([]);

  const { usuario } = useParams();
  console.log("EL USUARIO QUE LLEGA ES : # => ", usuario);

  const obtenerDatos = async () => {
    basedeDatos
      .collection("informacion")
      .doc("informacionUsuarios")
      .collection("usuarios")
      .onSnapshot((querySnapshot) => {
        const datosObtenidos = [];
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
          console.log(doc.id);
          if (doc.data().email === usuario) {
            setEstadoEncontrado({
              encontrado: true,
            });
          }
          datosObtenidos.push({
            ...doc.data(),
            id: doc.id,
          });
          setInformacionUsuarios({
            datosObtenidos,
          });
        });
      });
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  return (
    <div className="panel">
      <h1>Bienvenido..</h1>
      {estadoEncontrado.encontrado ? (
        <ListaAccionesPanel usuario={usuario} />
      ) : (
        <CardError />
      )}
    </div>
  );
};

export default InicioPanelEscort;
