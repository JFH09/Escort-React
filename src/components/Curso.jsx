import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootswatch/dist/superhero/bootstrap.min.css";
import "../Estilos/ConsultaCurso.css";
import { useParams } from "react-router-dom";
import { basedeDatos } from "../configuracion/Config_DB_Firebase";
import useObtenerListaEstudiantes from "./customHooks/useObtenerListaEstudiantes";
import FormularioEditEstudiante from "./FormularioEditEstudiante";

const Curso = () => {
  const usuario = useParams();
  const entroUsuario = usuario.usuario;
  const cursoConsulta = usuario.curso;

  console.log("El usuario que entra a Curso es => ", entroUsuario);
  const [estadoId, setEstadoId] = useState("");

  /*
  console.log("el curso a revisar es = ", cursoConsulta);
  const [informacionUsuarios, setInformacionUsuarios] = useState([]);
  const listaCursoEstudiantes = useObtenerListaEstudiantes(cursoConsulta);
  console.log("En curso...", listaCursoEstudiantes);*/
  const [estadoCurso, setEstadoCurso] = useState([]);
  const estadoInicialEstud = {
    nombre: "",
    apellido: "",
    identificador: "",
    curso: "",
    numero: "",
  };
  const [estadoEstudianteEdit, setEstadoEstudianteEdit] = useState(
    estadoInicialEstud
  );
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setEstadoEstudianteEdit({ ...estadoEstudianteEdit, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(estadoEstudianteEdit);

    setEstadoEstudianteEdit({ ...estadoInicialEstud });
  };
  const eliminarPregunta = async (id) => {
    if (window.confirm("¿En realidad quiere elimiar el usuario?")) {
      await basedeDatos
        .collection("informacion")
        .doc("informacionUsuarios")
        .collection("estudiantes")
        .doc("cursos")
        .collection(cursoConsulta)
        .doc("integrantes")
        .collection("listaEstudiantes")
        .doc(id)
        .delete();
      alert("se elimino el usuario !");
    }
  };
  const obtenerDatos = async () => {
    await basedeDatos
      .collection("informacion")
      .doc("informacionUsuarios")
      .collection("estudiantes")
      .doc("cursos")
      .collection(cursoConsulta)
      .doc("integrantes")
      .collection("listaEstudiantes")
      .onSnapshot((querySnapshot) => {
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setEstadoCurso(docs);
      });
  };

  useEffect(() => {
    obtenerDatos();
  }, []);
  return (
    <div data-spy="scroll">
      <div className="container-fluid contenidoUsuarios">
        <h1 className="text-light titulo">Estudiantes Grado {usuario.curso}</h1>

        <div className="tablaEstudiantes col-12 d-flex justify-content-center">
          <table class="table table-light ">
            <thead>
              <tr>
                <th class="btn-secondary disabled" scope="col">
                  #
                </th>
                <th class="btn-secondary disabled" scope="col">
                  Nombre
                </th>
                <th class="btn-secondary disabled" scope="col">
                  Apellido
                </th>
                <th class="btn-secondary disabled" scope="col">
                  Identificador
                </th>
                <th class="btn-secondary disabled" scope="col">
                  Curso
                </th>
                <th class="btn-secondary disabled" scope="col">
                  Editar
                </th>
                <th class="btn-secondary disabled" scope="col">
                  Eliminar
                </th>
              </tr>
            </thead>
            <tbody className="cuerpoTabla">
              {estadoCurso.map((d) => (
                <tr key={d.estadoCurso}>
                  <th class="bg-info" scope="row">
                    {d.numero}
                  </th>
                  <td class="bg-info ">{d.nombre}</td>
                  <td class="bg-info ">{d.apellido}</td>
                  <td class="bg-info ">{d.identificador}</td>
                  <td class="bg-info ">{d.curso}</td>
                  <td class="bg-info ">
                    {" "}
                    <Link
                      to={`/${entroUsuario}/CRUDEstudiantes/Curso/${usuario.curso}/FormularioEditEstudiante/${d.nombre}/${d.apellido}/${d.curso}/${d.identificador}/${d.numero}`}
                    >
                      <i
                        className="material-icons text-warning "
                        hover="pointer"
                      >
                        edit
                      </i>
                    </Link>
                  </td>
                  <td class="bg-info ">
                    {" "}
                    <i
                      className="material-icons text-danger"
                      onClick={() => eliminarPregunta(d.id, d.nombre)}
                      hover="pointer"
                    >
                      delete
                    </i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Curso;
