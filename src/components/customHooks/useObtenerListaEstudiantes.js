import { useState, useEffect } from "react";
import { basedeDatos } from "../../configuracion/Config_DB_Firebase";
function useObtenerListaEstudiantes(cursoConsulta) {
  const [informacionEstudiantes, setInformacionEstudiantes] = useState([]);
  console.log("el curso a buscar es...", cursoConsulta);
  const estadoInicialCurso = {
    listaEstudiantesCurso: "",
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
  const [estadoCurso, setEstadoCurso] = useState([]);
  const [estadoSegundo, setEstadoSegundo] = useState(estadoInicialSegundo);
  const [estadoTercero, setEstadoTercero] = useState(estadoInicialTercero);
  const [estadoCuarto, setEstadoCuarto] = useState(estadoInicialCuarto);
  const [estadoQuinto, setEstadoQuinto] = useState(estadoInicialQuinto);

  const obtenerDatosCurso = async () => {
    basedeDatos
      .collection("informacion")
      .doc("informacionUsuarios")
      .collection("estudiantes")
      .doc("cursos")
      .collection(cursoConsulta)
      .doc("integrantes")
      .collection("listaEstudiantes")
      .onSnapshot((querySnapshot) => {
        const datosObtenidos = [];
        querySnapshot.forEach((doc) => {
          console.log("datos personas", doc.data());
          console.log("id personas", doc.id);

          datosObtenidos.push({
            ...doc.data(),
            id: doc.id,
          });
          setEstadoCurso(datosObtenidos);
        });
      });
  };

  const obtenerDatos = async () => {
    obtenerDatosCurso();
    console.log("desde use obtener...el estadoCurso=", estadoCurso);
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  return {
    estadoCurso,
  };
}

export default useObtenerListaEstudiantes;
