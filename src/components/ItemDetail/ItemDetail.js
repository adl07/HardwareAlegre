import React, { useContext } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../CartContext/CartContext";




const ItemDetail = ({id,price, title,description})=>{

    const {modificandoCart, } = useCartContext();

    const onAdd = (quantity) =>{
        modificandoCart({id, cantidad: quantity, price, title});
        return(
            document.getElementById('cantidad').innerHTML= `Agregaste ${quantity} unidad/es`,
            document.getElementById('chau').style.display= 'none',
            document.getElementById('compra').style.display= 'block',
            document.getElementById('botonContenedor').style.display= 'flex'
        )     
    }

    return(
        <div className="row styleDetail">
            <div className="col-md-6 offset-md-4">
                <div class="fondo mb-3 p-3">
                    <div className="card-header">{title}</div>
                    <div className="card-body">
                    <h5 className="card-title">{description}</h5>
                    <h5 className="card-title">Precio: ${price}</h5>
                    <h5 id="cantidad"></h5>
                    <div id="botonContenedor">
                        <Link to="/Cart" className="text-decoration-none">
                        <button className="botonTerminarComrpra" id="compra">Terminar compra</button>
                        </Link>
                        
                        <Link to="/">
                        <button className="botonBack">Volver al Inicio</button>
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
            <div id="chau">
                <ItemCount stock={5} initial={1} onAdd={onAdd}/>
            </div>
            
        </div>
    )

}

export default ItemDetail