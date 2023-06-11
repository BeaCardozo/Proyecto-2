import React, { useState, useContext } from "react";
import "./Login.css";
import "../../App.css";
import Title from "../Title/Title";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../../Firebase.jsx";
import { AuthContext } from "../../AuthContext";

export default function Login() {
  const { login } = useContext(AuthContext);
  const { loginWithGoogle} = useContext(AuthContext);
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const routeChange = (path) => {
    navigate(path);
  };

  const handleLogin = () => {


    if (!email || !password) {
      window.alert("Por favor, complete todos los campos");
      return;
    }


    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    login(email, password);
    const user = userCredential.user;
    routeChange("/")
    // ...
  })
  .catch((error) => {
    window.alert("Datos incorrecto");
    const errorCode = error.code;
    const errorMessage = error.message;
  });

    
  };

  const handleLoginWithGoogle = () => {
   

    loginWithGoogle().then(() => {
      // Signed in
    
    
    routeChange("/")
    })
    // ...
        
     
    

  };

  return (
    <div className="container-form">
      <Title title="Iniciar Sesión" />
      <form className="form">
        <label htmlFor="email">Email: </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="correo@email.com"
          id="email"
          name="email"
        />
        <label htmlFor="email">Contraseña: </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="******"
          id="password"
          name="password"
        />
      </form>
      <button onClick={handleLogin} className="blue-btn">
        Acceder
      </button>
      <button onClick={() => routeChange("/register")} className="account-btn">
        ¿No tienes cuenta? Registrate aquí!
      </button>
      <button onClick={handleLoginWithGoogle} className="gray-btn">
        <i className="fa-brands fa-google"></i> &nbsp; Iniciar Sesión con Google
      </button>
    </div>
  );
}
