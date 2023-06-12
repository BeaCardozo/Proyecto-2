import Title from "../../components/Title/Title";
import "../../App.css"
import React, { useEffect, useState } from "react";
import { getFirestore, collection, query, getDocs, doc, getDoc } from "firebase/firestore";
import { auth } from "../../Firebase";

function AdminPage() {
  /*
  const [Users, setUsers] = useState([]);

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
        const usersCollection = collection(firestore, "users");
        const querySnapshot = await getDocs(usersCollection);
        const users = [];

        

        for (const doc of querySnapshot.docs) {
          const userData = doc.data();

          // Obtener los datos de la película desde la API de The Movie Database
          const apiKey = '33eff93df4270cb083333e09276c2a28';
          const url = `https://api.themoviedb.org/3/movie/${movieData.id}?api_key=${apiKey}`;
          const response = await fetch(url);
          const movieDetails = await response.json();
        }

        setUsers(users);
      } catch (error) {
        console.error("Error al obtener las películas favoritas:", error);
      }
    };
    fetchFavoriteMovies();
  }, [])*/


  //La idea es imprimir una lista que tenga el nombre, y cantidad de tickets de la reserva
  return (
    <div className="main-container">
        <Title title="Administrador" description="Aquí podrá observar los datos de las reservas realizadas dentro de la página de Cine-Unimet. Incluyendo la información pertinente de la película reservada y datos del usuario que realizó la compra."/>
        <div className="reservations-form">
        
            <ul>
              <li>Nombre: </li>
              <li>Película: </li>
              <li>Cantidad de Boletos: </li>
            </ul>
            <hr />
          </div>
    </div>
  )
}

export default AdminPage;
