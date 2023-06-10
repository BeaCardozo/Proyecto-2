import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer =()=>{
    return(
        <div className="footer">
            <div className = "footer section">
                <div className = "footer-links">
                    <div className = "footer-links_div">
                        <div className= "footer-below-links">
                        <Link to= "/"><div><p>Inicio</p></div></Link>
                        <Link to= "/"><div><p>Reservar</p></div></Link>
                        <Link to= "/"><div><p>Información</p></div></Link>
                        <Link to= "/"><div><p>Contacto</p></div></Link>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="footer-below">
                    <div className ="footer-copyright">
                        <p>©{new Date().getFullYear()} Cine Unimet. All rights reserved.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;