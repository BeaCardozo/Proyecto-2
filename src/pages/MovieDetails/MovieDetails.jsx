import React, { useEffect, useState } from "react";
import Title from "../../components/Title/Title";
import "../../App.css";
import "./MovieDetails.css";
import { Link, useParams } from "react-router-dom";

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const apiKey = '33eff93df4270cb083333e09276c2a28';
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;

        const response = await fetch(url);
        const data = await response.json();

        setMovie(data);
        console.log(data);
      } catch (error) {
        console.error("Error al obtener los detalles de la película:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Cargando...</div>;
  }

  const {
    title,
    overview,
    backdrop_path,
    genres,
    runtime,
    spoken_languages,
    credits,
  } = movie;

  const actorNames = credits?.cast
    ?.slice(0, 5)
    ?.map((actor) => actor.name)
    ?.join(", ");

  const languageNames = spoken_languages
    ?.map((language) => language.name)
    ?.join(", ");

  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  const duration = `${hours}h ${minutes}min`;

  return (
    <div className="main-container">
      <div className="movie_info-container">
        <div className="img-container">
          <img
            src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
            alt={title}
          />
        </div>
        <div className="text-box">
          <Title title={title} />
          <ul>
            <li>
              <strong>Sinopsis: </strong> {overview}
            </li>
            <li>
              <strong>Actores: </strong> {actorNames}
            </li>
            <li>
              <strong>Idiomas: </strong> {languageNames}
            </li>
            <li>
              <strong>Duración: </strong> {duration}
            </li>
          </ul>
        </div>
        <button className="gray-btn">
          <i className="fa-regular fa-star"></i>Marcar como favorito
        </button>
        <button className="blue-btn">
          <Link to="/reserve">Comprar Boletos</Link>
        </button>
      </div>
    </div>
  );
}

export default MovieDetails;
