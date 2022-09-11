import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import CartWidget from "../CartWidget/CartWidget";
import Icons from "../Icons/Icons";


export default function NavBar (){

    return(
    <nav className="navbar navbar-dark bg-dark p-2">
        <div className="container-fluid">
            <h4 className="marcaTitulo" href="#">Fnx Hardware</h4>
                <div id="welcomeUser">
                    <p className="text-white" id="toolTip"></p>
                    <img className="iconSytleUser" src={Icons[10]}></img>
                </div>
            <div className="row d-flex contendor-icono">
                <div className="col-md-3 mt-1">
                    <Link to="/Sending">
                        <img className="iconSytleUser" type="button" src={Icons[9]}></img>
                    </Link>
                </div>
                <div className="col-md-3 mt-1">
                    <Link to="/User">
                        <img className="iconSytleUser" type="button" src={Icons[5]}></img>
                    </Link>
                </div>
                <div className="col-md-3 mt-1 text-start contendor-icono">
                    <CartWidget/>
                </div>
                <div className="col-md-3 mt-2">
                    <img src={Icons[8]} className="iconSytleMenu" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    </img>
                </div>
            </div>
            <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="textoNavbar navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/categoria/mouse" className="nav-link" aria-current="page" >Mouse</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/categoria/mother" className="nav-link" >Mother</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/categoria/procesador" className="nav-link">Procesador</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/categoria/gabinete" className="nav-link">Gabinetes</Link>
                        </li>
                    </ul>
                </div>
        </div>
    </nav>
    );
}
