import React, { useEffect, useState, useContext} from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, addDoc,getDocs } from "firebase/firestore";
import { auth } from "../../Firebase";
import "../Login/Login.css";
import "../../App.css";
import Title from "../Title/Title";
import { AuthContext } from "../../AuthContext";
import { useNavigate } from "react-router-dom";

const Reserve = () => {
  const [name, setName] = useState('');
  const [identification, setIdentification] = useState('');
  const [email, setEmail] = useState('');
  const [ticketQuantity, setTicketQuantity] = useState(0);
  const [ticketPrice, setTicketPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalTicketsSold, setTotalTicketsSold] = useState(0);
  let navigate = useNavigate();

  const user = auth.currentUser;

  const { id } = useParams(); // Obtener el ID de la película de la URL



  

  useEffect(() => {
    const randomPrice = Math.floor(Math.random() * (2500 - 1000 + 1)) + 1000;
    setTicketPrice(randomPrice);
  }, []);

  useEffect(() => {
    const calculatedTotalPrice = ticketQuantity * ticketPrice;
    setTotalPrice(calculatedTotalPrice);
  }, [ticketQuantity, ticketPrice]);
  

  const handleReserve = async (e) => {
    e.preventDefault();

    console.log("Se han vendido", totalTicketsSold)

    try {
      // Verificar si el usuario está autenticado
  
      if (!user) {
        // El usuario no está autenticado, muestra un mensaje o redirige a la página de inicio de sesión
        window.alert("El usuario no está autenticado");
        return;
      }

      if (!name || !identification || !email || ticketQuantity <= 0) {
        window.alert("Por favor, complete todos los campos y seleccione una cantidad de boletos válida");
        return;
      }

      if (totalTicketsSold + ticketQuantity > 20) {
        window.alert("No puedes reservar más de 20 tickets en total");
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
     
      const firestore = getFirestore();
      const reservationsCollection = collection(firestore, "users", userUid, "reservations");
      await addDoc(reservationsCollection, reservationData);
      

      // Muestra un mensaje de éxito o redirige a la página de confirmación de reserva
      window.alert("Reserva realizada con éxito");
      navigate('/');
    } catch (error) {
      // Muestra un mensaje de error o redirige a la página de error de reserva
      window.alert("Error al realizar la reserva",error);
     
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

        <label htmlFor="ticketPrice">Precio por Boleto:</label>
            <input
              className="input-number"
              type="number"
              value={ticketPrice}
              readOnly
            />

        <label htmlFor="totalPrice">Precio Total:</label>
            <input
              className="input-number"
              type="number"
              value={totalPrice}
              readOnly
            />    

        <button className="blue-btn" type="submit">
          Comprar
        </button>
      </form>
    </div>
  );
};

export default Reserve;
