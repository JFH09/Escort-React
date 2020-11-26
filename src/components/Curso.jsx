import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { basedeDatos } from "../configuracion/Config_DB_Firebase";
import useObtenerListaEstudiantes from "./customHooks/useObtenerListaEstudiantes";

const Curso = () => {
  const usuario = useParams();
  const entroUsuario = usuario.usuario;
  const cursoConsulta = usuario.curso;
  console.log("El usuario que entra a Curso es => ", entroUsuario);
  /*
  console.log("el curso a revisar es = ", cursoConsulta);
  const [informacionUsuarios, setInformacionUsuarios] = useState([]);
  const listaCursoEstudiantes = useObtenerListaEstudiantes(cursoConsulta);
  console.log("En curso...", listaCursoEstudiantes);*/
  const [estadoCurso, setEstadoCurso] = useState([]);
  const obtenerDatos = async () => {
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

  useEffect(() => {
    obtenerDatos();
    console.log("el estado esta en = ", estadoCurso);
  }, []);
  return (
    <div>
      <h1>Estudiantes Grado...primero....</h1>
      <h1>Estudiantes Grado...primero....</h1>
      <h1>Estudiantes Grado...primero....</h1>
      <h1>Estudiantes Grado...primero....</h1>
      <h1>Estudiantes Grado..._ {cursoConsulta}</h1>
      <h1>Estudiantes Grado...{entroUsuario}..</h1>
      <div className="tablaEstudiantes col-12 d-flex justify-content-center">
        <table class="table table-light ">
          <thead>
            <tr>
              <th class="bg-secondary" scope="col">
                #
              </th>
              <th class="bg-secondary" scope="col">
                Nombre
              </th>
              <th class="bg-secondary" scope="col">
                Apellido
              </th>
              <th class="bg-secondary" scope="col">
                Identificador
              </th>
              <th class="bg-secondary" scope="col">
                Curso
              </th>
            </tr>
          </thead>
          <tbody className="cuerpoTabla">
            {estadoCurso.map((d = 0) => (
              <tr key={d.estadoCurso}>
                <th class="bg-info" scope="row">
                  {d.numero}
                </th>
                <td class="bg-info ">{d.nombre}</td>
                <td class="bg-info ">{d.apellido}</td>
                <td class="bg-info ">{d.identificador}</td>
                <td class="bg-info ">{d.curso}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Curso;
