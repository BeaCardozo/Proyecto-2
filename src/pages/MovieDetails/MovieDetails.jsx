import React from "react";
import Title from "../../components/Title/Title";
import "../../App.css"
import "./MovieDetails.css"
import { Link } from "react-router-dom";


function MovieDetails() {
  return (
    <div className="main-container">
        <div className="movie_info-container">
            <div className="img-container">
            <img src="https://geekrocktv.files.wordpress.com/2018/09/1418820_toystorybanner.jpg" alt="" />
            </div>
        <div className="text-box">
            <Title title="Título de la película"/>
            <ul>
                <li><strong>Sinópsis: </strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aperiam cumque modi animi, dolore corrupti necessitatibus sequi reiciendis repellat saepe culpa expedita tenetur voluptas quam, laboriosam voluptates cum perferendis maiores.</li>
                <li><strong>Actores: </strong> Lorem ipsum,  dolor sit amet, consectetur adipisicing elit. Officia aperiam, cumque modi animi, dolore corrupti necessitatibus.</li>
                <li><strong>Idiomas: </strong> Lorem ipsum,  dolor sit amet, consectetur adipisicing elit. Officia aperiam.</li>
                <li><strong>Duración: </strong> Lorem ipsum,  dolor sit amet.</li>
            </ul>
        </div>
        <button className="gray-btn"><i class="fa-regular fa-star"></i>Marcar como favorito</button>
        <button className="blue-btn"><Link to="/reserve">Comprar Boletos</Link></button>
        </div>
    </div>
  )
}


export default MovieDetails;