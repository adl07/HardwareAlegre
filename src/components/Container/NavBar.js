import React from "react";
import "./Nav.css";
import "../CartWidget/CartWidget";
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
                            <a class="nav-link active" aria-current="page" href="#">Componentes</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Envios</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contactenos</a>
                        </li>
                    </ul>
                </div>
        </div>
    </nav>
    );
}
