import { useState, useEffect } from "react";
import { basedeDatos } from "../../configuracion/Config_DB_Firebase";
function useDBObtener() {
  const [informacionUsuarios, setInformacionUsuarios] = useState([]);

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

  return {
    informacionUsuarios,
  };
}

export default useDBObtener;
