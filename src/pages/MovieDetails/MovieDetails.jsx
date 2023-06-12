import React, { useEffect, useState, useContext} from "react";
import Title from "../../components/Title/Title";
import "../../App.css";
import "./MovieDetails.css";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../AuthContext";
import { useLocation } from "react-router-dom";
import { app,auth } from "../../Firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";


function MovieDetails() {
  const location = useLocation()
  const released = true;
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const routeChange = (path) => {
    navigate(path);
  };
  
  function ifReleased() {
    if(released){
      return(
          user ? (   
            <><button className="gray-btn" onClick={handleAddToFavorites}>
                <i className="fa-regular fa-star"></i>Marcar como favorito
            </button><button className="blue-btn">
                  <Link to="/reserve">Comprar Boletos</Link>
            </button></>
            ) : (
            <button className="blue-btn">
                  <Link to="/loginpage">Iniciar Sesion</Link>
            </button>
            ) 
      )
    } else {
      return(
      <h1>Proximamente en cines</h1>)
    }
  }

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


  const handleAddToFavorites = async () => {
    try {
      // Verificar si el usuario está autenticado
      const user = auth.currentUser;
      if (!user) {
        // El usuario no está autenticado, muestra un mensaje o redirige a la página de inicio de sesión
        window.alert("El usuario no está autenticado");
        
      }
      
      
  
      // Agregar la película al usuario en Firestore
      const movieData = {
        // Agrega los datos de la película que deseas almacenar
        title: movie.title,
        id: movie.id,
        // ... otros campos de la película
      };
  
      // Crea una nueva colección "movies" en Firestore y agrega el documento con los datos de la película
      const userUid = user.uid;
      const firestore = getFirestore();
      const userMoviesCollection = collection(firestore, "users", userUid, "movies");
      await addDoc(userMoviesCollection, movieData);
      
      window.alert("Película agregada a favoritos");
      
    } catch (error) {

      window.alert("Error al agregar la película a favoritos");
      
    }
  };

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

        {ifReleased()}
      </div>
    </div>
  );
}

export default MovieDetails;
