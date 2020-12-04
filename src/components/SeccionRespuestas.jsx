import React, { useState, useEffect } from "react";
import SeccionPreguntas from "./SeccionPreguntas";
import "../Estilos/SeccionPreguntas.css";
import { basedeDatos } from "../configuracion/Config_DB_Firebase";
const SeccionRespuestas = () => {
  const [estadoProblemas, setEstadoProblemas] = useState([]);

  const [estadoId, setEstadoId] = useState("");
  const manejoPregunta = async (estadoPreguntas) => {
    try {
      if (estadoId === "") {
        console.log("agreegando Pregunta De", estadoPreguntas.tituloPregunta);
        await basedeDatos
          .collection("informacion")
          .doc("informacionPreguntas")
          .collection(estadoPreguntas.tituloPregunta)
          .doc()
          .set(estadoPreguntas);
        alert("pregunta agregada...");
      } else {
        await basedeDatos
          .collection("informacion")
          .doc("informacionPreguntas")
          .collection(estadoMateria)
          .doc(estadoId)
          .update(estadoPreguntas);
        alert("Pregunta Actualizada...");

        setEstadoId("");
      }
    } catch (error) {
      console.log(error);
      alert("No se pudo realizar la accion, intentelo mas tarde...");
    }
  };

  const eliminarPregunta = async (id, materia) => {
    if (window.confirm("En realidad quiere elimiar la pregunta?")) {
      await basedeDatos
        .collection("informacion")
        .doc("informacionPreguntas")
        .collection(materia)
        .doc(id)
        .delete();
      alert("se elimino la pregunta");
    }
  };
  const obtenerPreguntasMatematicas = async (materia) => {
    basedeDatos
      .collection("informacion")
      .doc("informacionPreguntas")
      .collection(materia)
      .onSnapshot((querySnapshot) => {
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setEstadoProblemas(docs);
      });
    setEstadoMateria(materia);
  };

  const obtenerEstadoMateria = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    console.log("El estado de materia es = ", name);
    switch (name) {
      case "Matematicas":
        console.log("es : ", "Matematicas");
        obtenerPreguntasMatematicas("Matematicas");
        break;
      case "Biologia":
        console.log("es : ", "Biologia");
        obtenerPreguntasMatematicas("Biologia");

        break;
      case "Español":
        console.log("es : ", "Español");
        obtenerPreguntasMatematicas("Español");
        break;
      case "Geografia":
        console.log("es : ", "Geografia");
        obtenerPreguntasMatematicas("Geografia");
        break;
      case "Sociales":
        console.log("es : ", "Sociales");
        obtenerPreguntasMatematicas("Sociales");
        break;
      case "Quimica":
        console.log("es : ", "Quimica");
        obtenerPreguntasMatematicas("Quimica");
        break;
      case "Ed.Fisica":
        console.log("es : ", "Ed.Fisica");
        obtenerPreguntasMatematicas("Ed.Fisica");
        break;
      case "Danzas":
        console.log("es : ", "Danzas");
        obtenerPreguntasMatematicas("Danzas");
        break;
      case "Artes":
        console.log("es : ", "Artes");
        obtenerPreguntasMatematicas("Artes");
        break;
      case "Musica":
        console.log("es : ", "Musica");
        obtenerPreguntasMatematicas("Musica");
        break;
      case "Religion":
        console.log("es : ", "Religion");
        obtenerPreguntasMatematicas("Religion");
        break;
      case "Etica":
        console.log("es : ", "Etica");
        obtenerPreguntasMatematicas("Etica");
        break;
      case "Informatica":
        console.log("es : ", "Informatica");
        obtenerPreguntasMatematicas("Informatica");

        break;
      case "Ingles":
        console.log("es : ", "Ingles");
        obtenerPreguntasMatematicas("Ingles");
        break;
      default:
        console.log("no se encontro nada..");
    }
  };
  var consultarMateria = "";
  const [estadoMateria, setEstadoMateria] = useState();

  return (
    <div className="tamañoSeccion transparencia">
      <SeccionPreguntas
        {...{
          manejoPregunta,
          estadoProblemas,
          estadoId,
          estadoMateria,
        }}
      />
      <div className=" justify-content-center col-md-12 fondoSeccion">
        <div className="seccionBotones">
          <a
            name="Matematicas"
            className="btn  materiaTablero text-light col-4"
            value="Matematicas"
            onClick={obtenerEstadoMateria}
          >
            Matematicas
          </a>
          <a
            className="btn  materiaTablero text-light col-4"
            onClick={obtenerEstadoMateria}
          >
            Biologia
          </a>
          <a
            name="Español"
            className="btn  materiaTablero  text-light col-4"
            onClick={obtenerEstadoMateria}
          >
            Español
          </a>
          <a
            name="Geografia"
            className="btn materiaTablero text-white col-4"
            onClick={obtenerEstadoMateria}
          >
            Geografia
          </a>
          <a
            name="Sociales"
            className="btn materiaTablero text-light col-4  "
            onClick={obtenerEstadoMateria}
          >
            Sociales
          </a>
          <a
            name="Quimica"
            className="btn materiaTablero text-light col-4"
            onClick={obtenerEstadoMateria}
          >
            Quimica
          </a>
          <a
            name="Ed.Fisica"
            className="btn materiaTablero text-light col-4"
            onClick={obtenerEstadoMateria}
          >
            Ed.Fisica
          </a>
          <a
            name="Danzas"
            className="btn materiaTablero text-light col-4"
            onClick={obtenerEstadoMateria}
          >
            Danzas
          </a>
          <a
            name="Artes"
            className="btn materiaTablero text-light col-4"
            onClick={obtenerEstadoMateria}
          >
            Artes
          </a>
          <a
            name="Musica"
            className="btn materiaTablero text-light col-4"
            onClick={obtenerEstadoMateria}
          >
            Musica
          </a>
          <a
            name="Religion"
            className="btn materiaTablero text-light col-4"
            onClick={obtenerEstadoMateria}
          >
            Religion
          </a>
          <a
            name="Etica"
            className="btn materiaTablero text-light col-4"
            onClick={obtenerEstadoMateria}
          >
            Etica
          </a>
          <a
            name="Informatica"
            className="btn materiaTablero text-light col-4"
            onClick={obtenerEstadoMateria}
          >
            Informatica
          </a>
          <a
            name="Ingles"
            className="btn  materiaTablero text-light col-4"
            onClick={obtenerEstadoMateria}
          >
            Ingles
          </a>
        </div>
      </div>
      <div className="seccionCardsPreguntas col-md-12">
        {console.log(consultarMateria)}
        {estadoProblemas.map((materia) => (
          <div className="card mb-1" key={materia.id}>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h4>{materia.tituloPregunta}</h4>

                <div>
                  <i
                    className="material-icons text-warning"
                    onClick={() => {
                      setEstadoId(materia.id);
                      alert("ve al Formulario para actualizar");
                    }}
                    hover="pointer"
                  >
                    edit
                  </i>
                  <i
                    className="material-icons text-danger"
                    onClick={() =>
                      eliminarPregunta(materia.id, materia.tituloPregunta)
                    }
                    hover="pointer"
                  >
                    delete
                  </i>
                </div>
              </div>
              <h6>{materia.descripcion}</h6>
              <p>{materia.pregunta}</p>
              <a href="" target="_blank" rel="noopener noreferrer">
                Contestar Pregunta...
              </a>
              {materia.respuesta === null ? (
                <p>No han Contestado esta pregunta</p>
              ) : (
                <p>{materia.respuesta}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeccionRespuestas;
