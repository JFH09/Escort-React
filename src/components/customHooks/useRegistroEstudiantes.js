import { useState, useEffect } from "react";

function useRegistroEstudiantes(estadoRegistro) {
  console.log("en useRegistro...", estadoRegistro);
  /*
  const agregarEditarUsuario = async (objetoDePopupC) => {
    console.log("objetoContraseña ==&", objetoDePopupC.contraseña);
    await autenticacion
      .createUserWithEmailAndPassword(
        objetoDePopupC.email,
        objetoDePopupC.contraseña
      )
      .then((resultado) => {
        console.log("Agregando ...", objetoDePopupC);
        basedeDatos
          .collection("informacion")
          .doc("informacionUsuarios")
          .collection("usuarios")
          .doc()
          .set(objetoDePopupC)
          .catch((error) => {
            console.log(error);
          });
        console.log("Usuario Agregado...");
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
  };*/
  return {};
}

export default useRegistroEstudiantes;
