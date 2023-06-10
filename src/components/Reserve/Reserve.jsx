import React, {useState} from "react";
import "../Login/Login.css";
import "../../App.css"
import Title from "../Title/Title";

const Reserve =()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleInfo = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return(
        <div className="container-form">
            <Title title="Comprar Boletos"/>
            <form className ="form" onSubmit={handleInfo}>
            <label for="email">Nombre y Apellido: </label>
                <input value = {email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Ana López" id="email" name="email"/>
                <label for="email">Cédula de Identidad: </label>
                <input value = {email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="C.I-" id="email" name="email"/>
                <label for="email">Email: </label>
                <input value = {email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="correo@email.com" id="email" name="email"/>
                <label for="email">Número de Boletos: </label>
                <input className= "input-number" type="number"/>
                <label for="email">Asientos disponibles: </label>
            </form>
            <button className ="blue-btn">Comprar</button>
        </div>
      
    )
}

export default Reserve;