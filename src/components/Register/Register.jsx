import React from "react";
import "../Login/Login.css";
import Title from "../Title/Title";
import "../../App.css"

const Register =()=>{

    return(
        <div className="container-form">
            <Title title="Crea tu cuenta"/>
            <form className ="form">
            <label for="email">Nombre Completo: </label>
                <input type="name" placeholder="Ana López" id="email" name="name"/>
                <label for="email">Email: </label>
                <input type="email" placeholder="correo@email.com" id="email" name="email"/>
                <label for="email">Contraseña: </label>
                <input type="password" placeholder="******" id="password" name="password"/>
                <label for="email">Verificar contraseña: </label>
                <input type="password" placeholder="******" id="password" name="password"/>
            </form>
            <button className ="access-btn">Registrarse</button>
            <button className="account-btn"> ¿Ya estas registrado? Iniciar Sesión</button>
            <button className="gray-btn"> <i class="fa-brands fa-google"></i> &nbsp; Registrarse con Google</button>
        </div>
      
    )
}

export default Register;