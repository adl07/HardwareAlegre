import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import CartWidget from "../CartWidget/CartWidget";


export default function NavBar (){
    return(
    <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Fnx Hardware</a>
            <div className="row contendor-icono">
                <div className="col-4 text-start contendor-icono">
                    <CartWidget/>
                </div>
                <div className="col-4">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                </div>
            </div>
            <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                            <Link to="/" class="nav-link">Inicio</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/categoria/mouse" class="nav-link active" aria-current="page" >Mouse</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/categoria/mother" class="nav-link" >Mother</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/categoria/procesador" class="nav-link">Procesador</Link>
                        </li>
                    </ul>
                </div>
        </div>
    </nav>
    );
}
