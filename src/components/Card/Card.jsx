import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import "../../App.css";

const Card=(props)=>{
    const URL_IMAGE = 'https://image.tmdb.org/t/p/original'
    const { title, language, popularity, poster, id} = props;
    const released = props.released;


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
                        <h4><i class="fa-solid fa-language"></i><strong>Idiomas: </strong>{language}</h4>
                        <h4><i class="fa-light fa-camera-movie"></i><strong>Géneros: </strong></h4> 
                        <h4><i class="fa-light fa-camera-movie"></i><strong>Popularidad: </strong> {popularity}</h4>


                        {released ? (

                        <button className="blue-btn">

                          
                        <Link to={`/moviedetails/${id}`} >
                                Ver mas
                        </Link>
                        </button>
                        ) : (   

                            <button className="blue-btn">

                          
                            <Link to={`/moviedetails2/${id}`} >
                                    Ver mas
                            </Link>
                            </button>    
                        )}


                    </div>
                </div>
            </div>

       </div>
      
    )
}

export default Card;