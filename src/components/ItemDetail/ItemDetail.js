import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";


const ItemDetail = ({price, title,description})=>{

    const onAdd = (quantity) =>{
        return(
            document.getElementById('cantidad').innerHTML= `agregaste ${quantity}`,
            document.getElementById('chau').style.display= 'none',
            document.getElementById('compra').style.display= 'block'
        )     
    }

    return(
        <div className="row">
            <div className="col-md-6 offset-md-4">
                <div class="fondo mb-3 p-3">
                    <div className="card-header">{title}</div>
                    <div className="card-body">
                    <h5 className="card-title">{description}</h5>
                    <h5 className="card-title">{price}</h5>
                    <h5 id="cantidad"></h5>
                    <button id="compra">Terminar mi compra</button>
                    <Link to="/categoria/mouse" className="botonBack">Volver al producto</Link>
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