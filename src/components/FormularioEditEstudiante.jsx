import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const FormularioEditEstudiante = (props) => {
  const estudiante = useParams();
  const [estadoId, setEstadoId] = useState("");
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
  return (
    <div className="container-fluid">
      <form
        className="card card-body seccionPreguntas  bg-transparent text-light border border-transparent seccionEdit "
        onSubmit={handleSubmit}
      >
        <h1>Editar el estudiante {estudiante.nombre}</h1>
        <div className="form-group input-group ">
          <div className="input-group-text bg-light border border-secondary">
            <i className="material-icons">create</i>
          </div>
          <div className="form-group col-10">
            <label className="materia">Curso</label>
            <select
              type="text"
              className="form-control border border-secondary "
              placeholder="De que trata la pregunta...."
              name="tituloPregunta"
              onChange={handleInputChange}
              value={estudiante.curso}
            >
              <option value=""></option>
              <option>Primero</option>

              <option>Segundo</option>

              <option>Tercero</option>
              <option>Cuarto</option>
              <option>Quinto</option>
            </select>
          </div>
        </div>

        <div className="form-group input-group">
          <div className="input-group-text bg-light border border-secondary">
            <i className="material-icons">description</i>
          </div>
          <div className="form-group col-10">
            <label className="materia">Nombre</label>
            <input
              type="text"
              className="form-control border border-secondary  "
              placeholder="Descripcion...."
              name="descripcion"
              onChange={handleInputChange}
              value={estudiante.nombre}
            ></input>
          </div>
        </div>

        <div className="form-group">
          <label className="materia">Apellido</label>
          <textarea
            name="pregunta"
            rows="3"
            className="form-control border border-secondary"
            placeholder="Escribe tu pregunta..."
            onChange={handleInputChange}
            value={estudiante.apellido}
          ></textarea>
        </div>

        <button className="btn botonEstilos text-light btn-block">
          Actualizar
        </button>
      </form>
    </div>
  );
};

export default FormularioEditEstudiante;
