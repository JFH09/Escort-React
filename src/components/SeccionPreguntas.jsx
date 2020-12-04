import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { basedeDatos } from "../configuracion/Config_DB_Firebase";
import "../Estilos/SeccionPreguntas.css";

const SeccionPreguntas = (props) => {
  const usuarioEntra = useParams();
  console.log("El usuario que entro estd = ", usuarioEntra.usuario);
  console.log("ENTRO EN SECCION PREGUNTAS!!!!");
  const estadoInicialPreguntas = {
    tituloPregunta: "",
    descripcion: "",
    pregunta: "",
    respuesta: "",
    creadoPor: usuarioEntra.usuario + usuarioEntra.curso,
  };
  const [estadoPreguntas, setEstadoPreguntas] = useState(
    estadoInicialPreguntas
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setEstadoPreguntas({ ...estadoPreguntas, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(estadoPreguntas);
    props.manejoPregunta(estadoPreguntas);
    setEstadoPreguntas({ ...estadoInicialPreguntas });
  };

  const obtenerPreguntaId = async (id, materia) => {
    const doc = await basedeDatos
      .collection("informacion")
      .doc("informacionPreguntas")
      .collection(materia)
      .doc(id)
      .get();

    setEstadoPreguntas({ ...doc.data() });
  };
  useEffect(() => {
    console.log(props.estadoId, props.estadoMateria);
    if (props.estadoId === "") {
      setEstadoPreguntas({ ...estadoInicialPreguntas });
    } else {
      console.log("editando....");
      obtenerPreguntaId(props.estadoId, props.estadoMateria);
    }
  }, [props.estadoId]);
  return (
    <form
      className="card card-body seccionPreguntas  bg-transparent text-light border border-transparent "
      onSubmit={handleSubmit}
    >
      <div className="form-group input-group ">
        <div className="input-group-text bg-light border border-secondary">
          <i className="material-icons">create</i>
        </div>
        <div className="form-group col-10">
          <label className="materia">Materia</label>
          <select
            type="text"
            className="form-control border border-secondary "
            placeholder="De que trata la pregunta...."
            name="tituloPregunta"
            onChange={handleInputChange}
            value={estadoPreguntas.tituloPregunta}
          >
            <option value=""></option>
            <option>Matematicas</option>

            <option>Biologia</option>

            <option>Sociales</option>
            <option>Ed.Fisica</option>
            <option>Danzas</option>
            <option>Artes</option>
            <option>Musica</option>
            <option>Religión</option>
            <option>Etica</option>
            <option>Español</option>
            <option>Informatica</option>
            <option>Ingles</option>
            <option>Quimica</option>
            <option>Geografia</option>
            <option>Filosofia</option>
          </select>
        </div>
      </div>

      <div className="form-group input-group">
        <div className="input-group-text bg-light border border-secondary">
          <i className="material-icons">description</i>
        </div>
        <input
          type="text"
          className="form-control border border-secondary  "
          placeholder="Descripcion...."
          name="descripcion"
          onChange={handleInputChange}
          value={estadoPreguntas.descripcion}
        ></input>
      </div>

      <div className="form-group">
        <textarea
          name="pregunta"
          rows="3"
          className="form-control border border-secondary"
          placeholder="Escribe tu pregunta..."
          onChange={handleInputChange}
          value={estadoPreguntas.pregunta}
        ></textarea>
      </div>

      <button className="btn botonEstilos text-light btn-block">
        {props.estadoId === "" ? "Enviar Pregunta" : "Actualizar"}
      </button>
    </form>
  );
};

export default SeccionPreguntas;
