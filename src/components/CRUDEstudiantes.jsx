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
      console.log(d);
      setEstadoArchivo(d);
      setEstadoLeido({
        leido: true,
      });
    });
  };

  const registrarEstudiantes = (archivo) => {
    console.log("ENTRO A REGISTRAR ESTUDIANTES", archivo[1].identificador);

    const tamaño = archivo.length;
    for (let i = 0; i < tamaño; i++) {
      console.log("leyendo archivo en el for...", archivo[i]);
      const objetoArchivo = archivo[i];
      const email =
        objetoArchivo.nombre +
        objetoArchivo.apellido +
        objetoArchivo.identificador +
        objetoArchivo.curso +
        "@escort.com";
      const contraseña = "EscortColegioOfelia##1";
      console.log("EMAIL ..***+****", email);
      agregarEstudiantes(archivo[i], email, contraseña);
    }
  };

  const agregarEstudiantes = async (Archivo, email, contraseña) => {
    console.log("llego.. ", Archivo);
    await autenticacion
      .createUserWithEmailAndPassword(email, contraseña)
      .then((resultado) => {
        console.log("Agregando a...", Archivo);
        basedeDatos
          .collection("informacion")
          .doc("informacionUsuarios")
          .collection("estudiantes")
          .doc("cursos")
          .collection(Archivo.curso)
          .doc("integrantes")
          .collection("listaEstudiantes")
          .doc()
          .set(Archivo)
          .catch((error) => {
            console.log(error);
          });
        console.log("Usuario Agregado...", Archivo);
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

  return (
    <div className="cuerpo-Crud  ">
      <div className=" row segmento">
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="boton-Registrar-Estudiantes">
          {estadoLeido.leido ? (
            <Link to={`/${usuario}/ConsultarEstudiantes/`}>
              <button className="btn btn-primaty col-12 sm botones-inferiores">
                Consultar Estudiantes Registrados
              </button>
            </Link>
          ) : (
            <div className=" botones-inferiores">
              <Link to={`/${usuario}/ConsultarEstudiantes/`}>
                <button className="btn btn-primaty col-12 sm botones-inferiores">
                  Consultar Estudiantes Registrados
                </button>
              </Link>
              <button className="btn btn-warning col-12 sm botones-inferiores sm">
                Volver
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CRUDEstudiantes;
