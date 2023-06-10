import { Component } from "react";
import { MenuData } from "./NavbarData";
import "./Navbar.css";
import { Link } from "react-router-dom";

class Navbar extends Component{
    
    //Cambio de icono: Hamburger Menu
    state = {clicked: false};
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        return(
            <div className = "navbar-container">
                <nav className="items">
                    <h1 className= {this.state.clicked ? "logo active" : "logo"}>CINE UNIMET</h1>
                    <div className="menu-hamburger" onClick={this.handleClick}>
                        <i className ={this.state.clicked ? "fas fa-times" : "fa-solid fa-bars"}></i>
                    </div>
                    <ul className= {this.state.clicked ? "nav-menu active" : "nav-menu"}>
                        {MenuData.map((item, index) => {
                            return(
                                <li key ={index}><Link to={item.url} className={item.cName}>{item.title}</Link></li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navbar;