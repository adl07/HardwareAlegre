import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import CartWidget from "../CartWidget/CartWidget";


export default function NavBar (){
    return(
    <nav class="navbar navbar-dark bg-dark p-2">
        <div className="container-fluid">
            <h4 className="text-white" href="#">Fnx Hardware</h4>
            <div className="row d-flex contendor-icono">
                <div className="col-md-4 text-start contendor-icono">
                    <CartWidget/>
                </div>
                <div className="col-md-4">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
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
                    </ul>
                </div>
        </div>
    </nav>
    );
}
