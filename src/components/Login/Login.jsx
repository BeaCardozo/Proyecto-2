import React, {useState} from "react";
import "./Login.css";
import "../../App.css";
import Title from "../Title/Title";
import {signInWithGoogle } from "../../Firebase.jsx";
import { useNavigate } from 'react-router-dom';





const Logingoogle = () => {
    signInWithGoogle()
    
}

export default function Login() {

let navigate = useNavigate();

const routeChange = (path) => {

      navigate(path);
}

const Login =()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleInfo = (e) => {
        e.preventDefault();
        console.log(email);
    }
}

    return(
        <div className="container-form">
            <Title title="Iniciar Sesión"/>
            <form className ="form">
                <label for="email">Email: </label>
                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="correo@email.com" id="email" name="email"/>
                <label for="email">Contraseña: </label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="******" id="password" name="password"/>
            </form>
            <button className ="blue-btn">Acceder</button>
            <button onClick={() => routeChange("/register")} className="account-btn" > ¿No tienes cuenta? Registrate aquí!</button>
            <button onClick={Logingoogle} className="gray-btn"> <i class="fa-brands fa-google"></i> &nbsp; Iniciar Sesión con Google</button>
        </div>
      
    )

}
