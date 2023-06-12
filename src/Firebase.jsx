
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  query,
} from "firebase/firestore";
import { AuthContext } from "./AuthContext";

import { useNavigate } from 'react-router-dom';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRmyHGb4zCjpBBdW2Y-h5z8RoOgHdpgZs",
  authDomain: "micro-proyecto-2-cfedc.firebaseapp.com",
  projectId: "micro-proyecto-2-cfedc",
  storageBucket: "micro-proyecto-2-cfedc.appspot.com",
  messagingSenderId: "135207457292",
  appId: "1:135207457292:web:fed8275d8f7d19bc051429",
  measurementId: "G-MGJ92HJSVW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


// Iniciar con Google




export const signInWithGoogle = (auth , provider) => {
  return new Promise((resolve, reject) => {
    

    signInWithPopup(auth, provider)
      .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);

        
          
            resolve(email);
          
    

        // Cerrar la ventana después de resolver la promesa
        resolve(email);
      })
      .catch((error) => {
        console.log(error);

        if (error.code === "auth/cancelled-popup-request") {
          // El usuario cerró la ventana emergente
          reject(new Error("Autenticación cancelada por el usuario."));
        } else {
          // Otro tipo de error
          reject(error);
        }
      });
  });
};

export async function signUp(email, password) {
  let result = null,
      error = null;
  try {
      result = await createUserWithEmailAndPassword(auth, email, password);
  } catch (e) {
      error = e;
  }

  return { result, error };
}

export { app,auth,provider };

