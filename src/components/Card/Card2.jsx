import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import "../../App.css";

const Card2=(props)=>{
    const URL_IMAGE = 'https://image.tmdb.org/t/p/original'
    const { title, language, popularity, poster, id,email,name,ticketQuantity } = props;
    


    return(
       <div className="container-wrap">
            <div className ="card">
                <div className="front-card">
                    <img src={`${URL_IMAGE + poster}`} alt="" />
                </div>
                <div className="back-card">
                    <div className="movie-info">
                    <h2>{title}</h2>
                    <hr></hr>
                        <h4><i class="fa-solid fa-language"></i><strong>Email de Reserva: </strong>{email}</h4>
                        <h4><i class="fa-light fa-camera-movie"></i><strong>Cantidad  Tickets Reservado: </strong>{ticketQuantity}</h4> 
                        <h4><i class="fa-light fa-camera-movie"></i><strong>Nombre persona que reservo: </strong> {name}</h4>
                        
                    </div>
                </div>
            </div>

       </div>
      
    )
}

export default Card2;