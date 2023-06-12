import React, { Component, useContext, useState } from "react";
import { MenuData } from "./NavbarData";
import "./Navbar.css";
import "../../App.css"
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthContext";

class Navbar extends Component {
  // Cambio de icono: Hamburger Menu
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <AuthContext.Consumer>
        {({ user, logout }) => (
          <div className="navbar-container">
            <nav className="items">
              <h1 className={this.state.clicked ? "logo active" : "logo"}>
                CINE UNIMET
              </h1>
              <div className="menu-hamburger" onClick={this.handleClick}>
                <i
                  className={
                    this.state.clicked ? "fas fa-times" : "fa-solid fa-bars"
                  }
                ></i>
              </div>
              <ul
                className={
                  this.state.clicked ? "nav-menu active" : "nav-menu"
                }
              >
                <li>
                  <Link to={"/"} className={"nav-links"}>
                    {"Inicio"}
                  </Link>
                </li>
               
                {user ? (   

                <><li>
                                    
                                </li><li>
                                        <Link to={"profile"} className={"nav-links"}>
                                            {"Perfil"}
                                        </Link>    
                                    </li><li>
                                  

                                    </li>
                                  
                                    {user.email == "admin@gmail.com" ? (

                                    <li>
                                        <Link to={"admin"} className={"nav-links"}>
                                            {"admin"}
                                        </Link>    
                                    </li>
                                    ) : (
                                        <></>
                                    )}
                                    
                                    <li>
                                        <button className="nav-links-mobile-transparent" onClick={logout}>
                                            Cerrar Sesión
                                        </button>
                                    </li></>
                ) : (
                  <>
                    <li>
                      <Link
                        to={"/register"}
                        className={"nav-links-mobile-transparent"}
                      >
                        {"Registrarse"}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/loginpage"}
                        className={"nav-links-mobile-transparent"}
                      >
                        {"Iniciar Sesion"}
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </nav>
          </div>
        )}
      </AuthContext.Consumer>
    );
  }
}

export default Navbar;
