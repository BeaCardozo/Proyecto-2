
import React, { useState } from "react";
import "../Login/Login.css";
import Title from "../Title/Title";
import "../../App.css"

import { useNavigate } from 'react-router-dom';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import {signInWithGoogle } from "../../Firebase.jsx";



const Logingoogle = () => {
    signInWithGoogle()
    
}

export default function Register() {

  const [inputNombre, setInputNombre] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputConfirm, setConfirm] = useState("");

  let navigate = useNavigate();

  const routeChange = (path) => {

        navigate(path);
    }

    const registrar = async () => {
       
        if(inputPassword == inputConfirm){
        
        const auth = getAuth();

        createUserWithEmailAndPassword(auth, inputEmail, inputPassword)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            routeChange("/");
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            window.alert('ocurrio un error');
            // ..
        });
        }else{
            window.alert('Las contrasenas no cooinciden');
      };  
    }
  
    return(
        <div className="container-form">
            <Title title="Crea tu cuenta"/>
            <form className ="form">
            <label for="email">Nombre Completo: </label>
                <input onChange={(e) => setInputNombre(e.target.value)} type="name" placeholder="Ana López" id="email" name="name"/> 
                <label for="email">Email: </label>
                <input onChange={(e) => setInputEmail(e.target.value)} type="email" placeholder="correo@email.com" id="email" name="email"/>
                <label for="email">Contraseña: </label>
                <input onChange={(e) => setInputPassword(e.target.value)} type="password" placeholder="******" id="password" name="password"/>
                <label for="email">Verificar contraseña: </label>
                <input onChange={(e) => setConfirm(e.target.value)} type="password" placeholder="******" id="password2" name="password2"/>
            </form>
            <button onClick={() => registrar()} className ="blue-btn">Registrarse</button>
            <button onClick={() => routeChange("/loginpage")} className="account-btn"> ¿Ya estas registrado? Iniciar Sesión</button>
            <button onClick={Logingoogle} className="gray-btn"> <i class="fa-brands fa-google"></i> &nbsp; Registrarse con Google</button>
        </div>
      
    )
};



