import React from "react";
import Title from "../../components/Title/Title";
import "../../App.css"

function AdminPage() {
  return (
    <div className="main-container">
        <Title title="Administrador" description="Aquí podrá observar los datos de las reservas realizadas dentro de la página de Cine-Unimet. Incluyendo la información pertinente de la película reservada y datos del usuario que realizó la compra."/>
        <div className="container-form" style={{background: "#DCDCDC", border: "none"} }>
          <div className="info-container">
            {/*Si no hay entradas
            <div className="tickets-empty">
            <h1>No hay reservas</h1>
            </div>
            */}
            <div className="titles">
              <h4 className= "movie-title">Película</h4>
              <h4 className= "user-name">Comprador</h4>
              <h4 className= "quantity">Tickets</h4>
              <h4 className= "total">Total</h4>
            </div>
            <div className="reservations">
              {/*cart. */}
            </div>

          </div>

        </div>
    </div>
  )
}

export default AdminPage;
