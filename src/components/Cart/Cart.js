import React from 'react';
import { useCartContext } from "../CartContext/CartContext";
import "./Cart.css";



export default function Cart() {

    const {datoProducto, precioTotal, eliminarProducto} = useCartContext();

    if(datoProducto.length === 0){
        return(
            <div className="row styleCart">
            <div className="col text-white text-center">
                <h3>Datos de la compra</h3>
                <h3>No hay productos agregados</h3>
                <h4>Precio Total: ${parseFloat(precioTotal())}</h4>
            </div>
            </div>
        )
        
    }

    return (
        <div className="row styleCart">
            <div className="col text-white text-center">
                {
                datoProducto.map((item)=>{
                return(
                    <div className="m-3" key={item.id} >
                        <h4>Producto: {item.title}</h4>
                        <h4>Cantidad: {item.cantidad}</h4>
                        <button className="botonEliminar" onClick={()=> eliminarProducto(item.id)}>Eliminar Producto</button>
                        <h4 className="m-3">Precio Total: ${parseFloat(precioTotal())}</h4>
                    </div>
                )
                })
                }
            </div>
            
        </div>
    )
}
