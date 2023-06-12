import React, { useEffect, useState } from "react";
import { getFirestore, collection, query, onSnapshot } from "firebase/firestore";
import { auth } from "../../Firebase";
import Title from "../../components/Title/Title";
import "../../App.css";

function AdminPage() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const user = auth.currentUser;
        const userUid = user.uid;
        const firestore = getFirestore();
        const reservationsCollection = collection(firestore, "Reservations");
        const q = query(reservationsCollection);

        const unsubscribe = onSnapshot(q, async (snapshot) => {
          const reservationsData = [];
          const promises = snapshot.docs.map(async (doc) => {
            const reservationData = { id: doc.id, ...doc.data() };

            const movieId = reservationData.movieId;
            const movieTitle = await getMovieTitle(movieId);
            reservationData.movieTitle = movieTitle;

            reservationsData.push(reservationData);
          });

          await Promise.all(promises); // Esperar a que todas las promesas se resuelvan

          setReservations(reservationsData);
        });

        return () => unsubscribe();
      } catch (error) {
        console.log("Error fetching reservations: ", error);
      }
    };

    fetchReservations();
  }, []);

  const getMovieTitle = async (movieId) => {
    try {
      const apiKey = '33eff93df4270cb083333e09276c2a28';
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
      );
      const data = await response.json();
      return data.title;
    } catch (error) {
      console.log("Error fetching movie title: ", error);
      return "Título no disponible";
    }
  };

  return (
    <div className="main-container">
      <Title
        title="Administrador"
        description="Aquí podrá observar los datos de las reservas realizadas dentro de la página de Cine-Unimet. Incluyendo la información pertinente de la película reservada y datos del usuario que realizó la compra."
      />
      <div className="reservations-form">
        {reservations.length > 0 ? (
          <ul>
            {reservations.map((reservation) => (
              <li key={reservation.id}>
                <strong>Nombre:</strong> {reservation.name}
                <br />
                <strong>Película:</strong> {reservation.movieTitle}
                <br />
                <strong>Cantidad de Boletos:</strong>{" "}
                {reservation.ticketQuantity}
                <br></br>
                <br></br>
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay reservaciones disponibles</p>
        )}
        <hr />
      </div>
    </div>
  );
}

export default AdminPage;
