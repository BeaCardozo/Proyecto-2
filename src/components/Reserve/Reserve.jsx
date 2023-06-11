import React, { useEffect, useState, useContext} from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { auth } from "../../Firebase";
import "../Login/Login.css";
import "../../App.css";
import Title from "../Title/Title";
import { AuthContext } from "../../AuthContext";

const Reserve = () => {
  const [name, setName] = useState('');
  const [identification, setIdentification] = useState('');
  const [email, setEmail] = useState('');
  const [ticketQuantity, setTicketQuantity] = useState(0);
  const {user} = useContext(AuthContext);

  const { id } = useParams(); // Obtener el ID de la película de la URL

  const handleReserve = async (e) => {
    e.preventDefault();

    try {
      // Verificar si el usuario está autenticado
  
      if (!user) {
        // El usuario no está autenticado, muestra un mensaje o redirige a la página de inicio de sesión
        window.alert("El usuario no está autenticado");
        return;
      }

      // Crea un objeto con los datos de la reserva
      const reservationData = {
        name: name,
        identification: identification,
        email: email,
        ticketQuantity: ticketQuantity,
        movieId: id 
      };

      const userUid = user.uid;

      // Crea una nueva colección "reservations" en Firestore y agrega el documento con los datos de la reserva
      const firestore = getFirestore();
      const reservationsCollection = collection(firestore, "users", userUid, "reservations");
      await addDoc(reservationsCollection, reservationData);

      // Muestra un mensaje de éxito o redirige a la página de confirmación de reserva
      window.alert("Reserva realizada con éxito");
    } catch (error) {
      // Muestra un mensaje de error o redirige a la página de error de reserva
      window.alert("Error al realizar la reserva",error);
      console.log(error)
    }
  };

  return (
    <div className="container-form">
      <Title title="Comprar Boletos" />
      <form className="form" onSubmit={handleReserve}>
        <label htmlFor="name">Nombre y Apellido:</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Ana López"
          id="name"
          name="name"
        />

        <label htmlFor="identification">Cédula de Identidad:</label>
        <input
          value={identification}
          onChange={(e) => setIdentification(e.target.value)}
          type="text"
          placeholder="C.I-"
          id="identification"
          name="identification"
        />

        <label htmlFor="email">Email:</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="correo@email.com"
          id="email"
          name="email"
        />

        <label htmlFor="ticketQuantity">Número de Boletos:</label>
        <input
          className="input-number"
          type="number"
          value={ticketQuantity}
          onChange={(e) => setTicketQuantity(e.target.value)}
        />

        <button className="blue-btn" type="submit">
          Comprar
        </button>
      </form>
    </div>
  );
};

export default Reserve;
