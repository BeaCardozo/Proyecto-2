import React from "react";
import Title from "../../components/Title/Title";
import Reserve from "../../components/Reserve/Reserve";
import "../../App.css"
import { Link } from "react-router-dom";


function ReservePage() {
  return (
    <div className="main-container">
       <Reserve/>
    </div>
  )
}


export default ReservePage;