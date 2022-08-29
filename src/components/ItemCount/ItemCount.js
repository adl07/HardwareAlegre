import React from "react";
import { useState } from "react";
import "./ItemCount.css"

export default function ItemCount({stock, initial, onAdd}){

    const [producto, setProducto] = useState(initial);
    const [botonAgregar, setBoton] = useState(false);
    const [botonEliminar, setBotonActivo] = useState(false);

    function desactivarBoton(){
        setBoton(true);
    }

    function desactivarBotonEliminar(){
        setBotonActivo(true);
    }

    const agregarProduto = () =>{
        setProducto (producto + 1)
        if(producto > stock){
            desactivarBoton();
        } 
    }

    const eliminarProducto =() =>{
        setProducto (producto - 1)
        if(producto <= 1){
            desactivarBotonEliminar();
        } 
    }
    

    return(
        <div className="row" id="hola">
            <div className="col-md-6 text-center offset-2 mt-3">
            <div className="card-body d-flex text-center text-dark">
                <div className="d-flex">
                    <p className="card-text px-2">{producto}</p>
                </div>
                <div className="d-flex justify-content-center">
                    <button disabled= {producto >= stock} onClick={agregarProduto} type="button" className="botonAgregarYRestar">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>
                    </button>
                    <button disabled={producto <=1} onClick={eliminarProducto} type="button" className="botonAgregarYRestar">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                            <path  d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                        </svg>
                    </button>
                    <div>
                        <button className="botonAgregarAlCarrito" disabled={stock <= 0} onClick={()=> onAdd(producto)}>Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}