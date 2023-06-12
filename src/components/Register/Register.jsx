import React, { useState, useContext } from "react";
import "../Login/Login.css";
import Title from "../Title/Title";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithGoogle } from "../../Firebase.jsx";
import { AuthContext } from "../../AuthContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye , faEyeSlash} from '@fortawesome/free-solid-svg-icons'

export default function Register() {
  const { login } = useContext(AuthContext);
  const [inputNombre, setInputNombre] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputConfirm, setConfirm] = useState("");

  /*Ver y esconder contraseña*/
  const [visible, setVisibility] = useState(false);
  const Icon =  <FontAwesomeIcon icon={visible ? faEyeSlash : faEye} onClick={() => setVisibility(visibility =>!visibility)}/>;
  const InputType = visible ? "text" : "password";

  let navigate = useNavigate();

  const routeChange = (path) => {
    navigate(path);
  };

  const registrar = async () => {
    if (inputPassword === inputConfirm) {
      const auth = getAuth();

      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          inputEmail,
          inputPassword
        );

        const user = userCredential.user;

        // Iniciar sesión en el AuthContext después del registro
        login(inputEmail, inputPassword);

        routeChange("/");
        
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        window.alert("Ocurrió un error");
      }
    } else {
      window.alert("Las contraseñas no coinciden");
    }
  };

  return (
    <div className="container-form">
      <Title title="Crea tu cuenta" />
      <form className="form">
        <label htmlFor="name">Nombre Completo: </label>
        <input
          onChange={(e) => setInputNombre(e.target.value)}
          type="name"
          placeholder="Ana López"
          id="name"
          name="name"
        />
        <label htmlFor="email">Email: </label>
        <input
          onChange={(e) => setInputEmail(e.target.value)}
          type="email"
          placeholder="correo@email.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Contraseña: <i className="password-icon">{Icon}</i></label>
          <input
            onChange={(e) => setInputPassword(e.target.value)}
            type= {InputType}
            placeholder="******"
            id="password"
            className="input-field"
            name="password"
          />
        <label htmlFor="password2">Verificar contraseña: </label>
        <input
          onChange={(e) => setConfirm(e.target.value)}
          type="password"
          placeholder="******"
          id="password2"
          name="password2"
        />
      </form>
      <button onClick={registrar} className="blue-btn">
        Registrarse
      </button>
      <button onClick={() => routeChange("/loginpage")} className="account-btn">
        ¿Ya estás registrado? Iniciar Sesión
      </button>
      <button onClick={signInWithGoogle} className="gray-btn">
        <i className="fa-brands fa-google"></i> &nbsp; Registrarse con Google
      </button>
    </div>
  );
}
