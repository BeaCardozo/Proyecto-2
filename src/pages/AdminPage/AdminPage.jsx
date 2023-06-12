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
        
        const unsubscribe = onSnapshot(q, (snapshot) => {
          const reservationsData = [];
          snapshot.forEach((doc) => {
            reservationsData.push({ id: doc.id, ...doc.data() });
          });
          setReservations(reservationsData);
        });

        return () => unsubscribe();
      } catch (error) {
        console.log("Error fetching reservations: ", error);
      }
    };

    fetchReservations();
  }, []);

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
                <strong>Película:</strong> {reservation.movieId}
                <br />
                <strong>Cantidad de Boletos:</strong>{" "}
                {reservation.ticketQuantity}
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
