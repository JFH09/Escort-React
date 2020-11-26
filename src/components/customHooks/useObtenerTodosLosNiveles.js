import { useState, useEffect } from "react";
import { basedeDatos } from "../../configuracion/Config_DB_Firebase";
function useObtenerListaEstudiantes() {
  const [informacionEstudiantes, setInformacionEstudiantes] = useState([]);

  const estadoInicialPrimero = {
    primero: "",
  };
  const estadoInicialSegundo = {
    segundo: "",
  };
  const estadoInicialTercero = {
    tercero: "",
  };
  const estadoInicialCuarto = {
    cuarto: "",
  };

  const estadoInicialQuinto = {
    quinto: "",
  };
  const [estadoPrimero, setEstadoPrimero] = useState(estadoInicialPrimero);
  const [estadoSegundo, setEstadoSegundo] = useState(estadoInicialSegundo);
  const [estadoTercero, setEstadoTercero] = useState(estadoInicialTercero);
  const [estadoCuarto, setEstadoCuarto] = useState(estadoInicialCuarto);
  const [estadoQuinto, setEstadoQuinto] = useState(estadoInicialQuinto);

  const obtenerDatosPrimero = async () => {
    basedeDatos
      .collection("informacion")
      .doc("informacionUsuarios")
      .collection("estudiantes")
      .doc("cursos")
      .collection("Primero")
      .doc("integrantes")
      .collection("listaEstudiantes")
      .onSnapshot((querySnapshot) => {
        const datosObtenidos = [];
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
          console.log(doc.id);

          datosObtenidos.push({
            ...doc.data(),
            id: doc.id,
          });
          setEstadoPrimero({
            primero: datosObtenidos,
          });
        });
      });
  };

  const obtenerDatosSegundo = async () => {
    basedeDatos
      .collection("informacion")
      .doc("informacionUsuarios")
      .collection("estudiantes")
      .doc("cursos")
      .collection("Segundo")
      .doc("integrantes")
      .collection("listaEstudiantes")
      .onSnapshot((querySnapshot) => {
        const datosObtenidos = [];
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
          console.log(doc.id);

          datosObtenidos.push({
            ...doc.data(),
            id: doc.id,
          });
          setEstadoSegundo({
            segundo: datosObtenidos,
          });
        });
      });
  };
  const obtenerDatosTercero = async () => {
    basedeDatos
      .collection("informacion")
      .doc("informacionUsuarios")
      .collection("estudiantes")
      .doc("cursos")
      .collection("Tercero")
      .doc("integrantes")
      .collection("listaEstudiantes")
      .onSnapshot((querySnapshot) => {
        const datosObtenidos = [];
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
          console.log(doc.id);

          datosObtenidos.push({
            ...doc.data(),
            id: doc.id,
          });
          setEstadoTercero({
            tercero: datosObtenidos,
          });
        });
      });
  };
  const obtenerDatosCuarto = async () => {
    basedeDatos
      .collection("informacion")
      .doc("informacionUsuarios")
      .collection("estudiantes")
      .doc("cursos")
      .collection("Cuarto")
      .doc("integrantes")
      .collection("listaEstudiantes")
      .onSnapshot((querySnapshot) => {
        const datosObtenidos = [];
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
          console.log(doc.id);

          datosObtenidos.push({
            ...doc.data(),
            id: doc.id,
          });
          setEstadoCuarto({
            cuarto: datosObtenidos,
          });
        });
      });
  };

  const obtenerDatosQuinto = async () => {
    basedeDatos
      .collection("informacion")
      .doc("informacionUsuarios")
      .collection("estudiantes")
      .doc("cursos")
      .collection("Cuarto")
      .doc("integrantes")
      .collection("listaEstudiantes")
      .onSnapshot((querySnapshot) => {
        const datosObtenidos = [];
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
          console.log(doc.id);

          datosObtenidos.push({
            ...doc.data(),
            id: doc.id,
          });
          setEstadoQuinto({
            quinto: datosObtenidos,
          });
        });
      });
  };

  const obtenerDatos = async () => {
    obtenerDatosPrimero();
    obtenerDatosSegundo();
    obtenerDatosTercero();
    obtenerDatosCuarto();
    obtenerDatosQuinto();

    setInformacionEstudiantes({
      primero: estadoPrimero.primero,
      segundo: estadoSegundo.segundo,
      tercero: estadoTercero.tercero,
      cuarto: estadoCuarto.cuarto,
      quinto: estadoQuinto.quinto,
    });
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  return {
    informacionEstudiantes,
  };
}

export default useObtenerListaEstudiantes;
