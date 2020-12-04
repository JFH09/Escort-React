import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../Estilos/CRUDEstudiantes.css";
import Error404 from "./Error404";
import * as XLSX from "xlsx";
import {
  basedeDatos,
  autenticacion,
} from "../configuracion/Config_DB_Firebase";

const CRUDEstudiantes = () => {
  var email = "";
  var contraseña = "";
  const { usuario } = useParams();
  const estadoInicialLeido = {
    leido: false,
  };
  const estadoInicialArchivo = {
    archivo: "",
  };
  const [estadoArchivo, setEstadoArchivo] = useState([]);
  const [estadoLeido, setEstadoLeido] = useState(estadoInicialLeido);
  const leerExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const leerArchivo = new FileReader();
      leerArchivo.readAsArrayBuffer(file);

      leerArchivo.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws);
        resolve(data);
      };
      leerArchivo.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      setEstadoArchivo(d);
      setEstadoLeido({
        leido: true,
      });
    });
  };

  return (
    <div className="container cuerpo-Crud  " data-spy="scroll">
      <div className=" row segmento justify-content-center">
        <div className="titulo">
          {console.log("entro a crud estudiante..")}
          <h1>Registro de estudiantes (Excel)</h1>
        </div>
        <div className="custom-file col-12 d-flex justify-content-center">
          <input
            type="file"
            className="custom-file-input"
            id="customFileLang"
            lang="es"
            onChange={(e) => {
              const file = e.target.files[0];
              leerExcel(file);
            }}
            accept=".xls, .xlsx"
          ></input>
          <label className="custom-file-label" for="customFileLang">
            Selecciona un archivo
          </label>
        </div>
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
              {estadoArchivo.map((d) => (
                <tr key={d.estadoArchivo}>
                  <th class="bg-info" scope="row">
                    {d.numero}
                  </th>
                  <td class="bg-info ">{d.nombre}</td>
                  <td class="bg-info ">{d.apellido}</td>
                  <td class="bg-info ">{d.identificador}</td>
                  <td class="bg-info ">{d.curso}</td>
                  {autenticacion
                    .createUserWithEmailAndPassword(
                      d.nombre +
                        d.apellido +
                        d.identificador +
                        d.curso +
                        "@escort.com",
                      "EscortColegioOfelia##1"
                    )
                    .then(async (resultado) => {
                      console.log("Agregando a...", d);
                      await basedeDatos
                        .collection("informacion")
                        .doc("informacionUsuarios")
                        .collection("estudiantes")
                        .doc("cursos")
                        .collection(d.curso)
                        .doc("integrantes")
                        .collection("listaEstudiantes")
                        .doc()
                        .set(d)
                        .catch((error) => {
                          console.log(error);
                        });
                      console.log("Usuario Agregado...", d);
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
                    })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="boton-Registrar-Estudiantes">
          {estadoLeido.leido ? (
            <div>
              <Link to={`/${usuario}/ConsultarEstudiantes/`}>
                <button className="btn btn-primary col-12 sm botones-inferiores">
                  Consultar Estudiantes Registrados
                </button>
                <button className="btn btn-success col-12 sm botones-inferiores">
                  Registrar Estudiantes
                </button>
              </Link>
            </div>
          ) : (
            <div className=" botones-inferiores">
              <Link to={`/${usuario}/ConsultarEstudiantes/`}>
                <button className="btn btn-primary col-12 sm botones-inferiores">
                  Consultar Estudiantes Registrados
                </button>
              </Link>
              <Link to={`/InicioPanelEscort/${usuario}`}>
                <button className="btn btn-warning col-12 sm botones-inferiores sm">
                  Volver
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CRUDEstudiantes;
