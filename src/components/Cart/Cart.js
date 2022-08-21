import React from 'react';
import { useCartContext } from "../CartContext/CartContext";
import { Link } from 'react-router-dom';
import "./Cart.css";



export default function Cart() {

    const {datoProducto, precioTotal, eliminarProducto} = useCartContext();

    if(datoProducto.length === 0){
        return(
            <div className="row styleCart">
            <div className="fondoCart col-md-6 offset-3 text white text-center">
                    <h3>Datos de la compra</h3>
                    <h4>No hay productos agregados</h4>
                    <Link to="/"> 
                    <button className="botonesCart">Agregar prodcutos</button>
                    </Link>
                    <h4 className="mt-2">Precio Total: ${parseFloat(precioTotal())}</h4>
            </div>
            </div>
        )
        
    }

    return (
        <div className="row styleCart">
            <div className="col-md-6 offset-3 text-white text-center">
                {
                datoProducto.map((item)=>{
                return(
                    <div className="fondoCart text-center m-3" key={item.id} >
                        <h4>Producto: {item.title}</h4>
                        <h4>Cantidad: {item.cantidad}</h4>
                        <button className="botonesCart" onClick={()=> eliminarProducto(item.id)}>Eliminar Producto</button>
                        <h4 className="m-3">Precio Total: ${parseFloat(precioTotal())}</h4>
                    </div>
                )
                })
                }
            </div>
            
        </div>
    )
}
