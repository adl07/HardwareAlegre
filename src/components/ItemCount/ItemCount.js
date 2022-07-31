import React from "react";
import { useState } from "react";
import "./ItemCount.css"

export default function ItemCount({stock, initial}){

    const [producto, setProducto] = useState(1);
    const [botonAgregar, setBoton] = useState(false);
    const [botonEliminar, setBotonActivo] = useState(false);

    function desactivarBoton(){
        setBoton(true);
    }

    function desactivarBotonEliminar(){
        setBotonActivo(true);
    }

    function agregarProduto (){
        setProducto (producto + 1)
        if(producto > stock){
            desactivarBoton();
        } 
    }

    function eliminarProducto(){
        setProducto (producto - 1)
        if(producto <= 1){
            desactivarBotonEliminar();
        }
    }
    

    return(
        <div class="card w-50 text-center">
            <img src="https://oplaygaming.com/wp-content/uploads/2020/10/razer-mamba-elite-gallery-07-gaming-mouse.jpg" class="card-img-top" alt="mouseRyzen"/>
            <div class="card-body text-center colorDeFondo">
                <div class="d-flex">
                <p>Pruducto Agregado:</p>
                <p class="card-text px-2">{initial}</p>
                </div>
                <div class="d-flex">
                    <p>Total Agregado:</p>
                    <p class="card-text px-2">{producto}</p>
                </div>
                <div class="d-flex justify-content-center">
                    <button disabled= {botonAgregar} onClick={agregarProduto} type="button" class="botonAgregarYRestar">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>
                    </button>
                    <p>Agregar producto</p>
                    <button disabled={botonEliminar} onClick={eliminarProducto} type="button" class="botonAgregarYRestar">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                            <path  d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}