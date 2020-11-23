import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAQMIOwys0znGOL66t5lJ4h_LUBYWnXUhA",
  authDomain: "escort-b33f7.firebaseapp.com",
  databaseURL: "https://escort-b33f7.firebaseio.com",
  projectId: "escort-b33f7",
  storageBucket: "escort-b33f7.appspot.com",
  messagingSenderId: "230888608502",
  appId: "1:230888608502:web:eed0da36429ec5e5d152d7",
  measurementId: "G-G78JDT8MQX",
};
// Initialize Firebase
export const fbConfig = firebase.initializeApp(firebaseConfig);
export const basedeDatos = fbConfig.firestore();
export const autenticacion = fbConfig.auth();
