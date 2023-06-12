import React, { useEffect, useState } from "react";
import { getFirestore, collection, query, getDocs, doc, getDoc } from "firebase/firestore";
import { auth } from "../../Firebase";
import "./Profile.css"; // Importa tu archivo CSS para los estilos personalizados
import Card from "../../components/Card/Card";
import Title from "../../components/Title/Title";

function Profile() {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    const fetchFavoriteMovies = async () => {
      try {
        // Verificar si el usuario está autenticado
        const user = auth.currentUser;
        if (!user) {
          // El usuario no está autenticado, muestra un mensaje o redirige a la página de inicio de sesión
          console.log("El usuario no está autenticado");
          return;
        }

        const userUid = user.uid;
        const firestore = getFirestore();
        const userMoviesCollection = collection(firestore, "users", userUid, "movies");
        const querySnapshot = await getDocs(userMoviesCollection);
        const movies = [];

        for (const doc of querySnapshot.docs) {
          const movieData = doc.data();

          // Obtener los datos de la película desde la API de The Movie Database
          const apiKey = '33eff93df4270cb083333e09276c2a28';
          const url = `https://api.themoviedb.org/3/movie/${movieData.id}?api_key=${apiKey}`;
          const response = await fetch(url);
          const movieDetails = await response.json();

          // Agregar los datos de la película a la lista de películas favoritas
          movies.push({ ...movieData, ...movieDetails });
        }

        setFavoriteMovies(movies);
      } catch (error) {
        console.error("Error al obtener las películas favoritas:", error);
      }
    };

    fetchFavoriteMovies();
  }, []);

  return (
    <section className='next_releases-section'>
    <Title title="Favoritos"/>
     <div className="cards-container">
        {favoriteMovies.map((movie) => (
            <Card id={movie.id} title={movie.title} language={movie.original_language} popularity={movie.popularity} genres={movie.genres} poster={movie.poster_path}/>

    
        ))}
      </div>
    </section>
  );
}

export default Profile;
