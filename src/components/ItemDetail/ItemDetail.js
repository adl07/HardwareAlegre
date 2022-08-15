import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";


const ItemDetail = ({price, title,description})=>{

    const onAdd = (quantity) =>{
        return(
            document.getElementById('cantidad').innerHTML= `agregaste ${quantity}`,
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
                    <h5 className="card-title">{price}</h5>
                    <h5 id="cantidad"></h5>
                    <div id="botonContenedor">
                        <Link to="/cart" className="text-decoration-none">
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