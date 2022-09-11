import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../CartContext/CartContext";
import Icons from "../Icons/Icons";





const ItemDetail = ({id,title,cantidad, description, price,stock})=>{

    const {modificandoCart, } = useCartContext();

    const onAdd = (quantity) =>{
        modificandoCart({ id, title, cantidad: quantity, description, price});
        return(
            document.getElementById('cantidad').style.display= 'block',
            document.getElementById('producto').innerHTML= `Agregaste ${quantity} de unidad/es`,
            document.getElementById('contadorOff').style.display= 'none',
            document.getElementById('botonContenedor').style.display= 'flex'
        )     
    }

    return(
        <div className="row styleDetail">
            <div className="col-md-6 mt-4 offset-md-4">
                <div class="fondo mb-3">
                    <div className="card-body">
                            <h5 className="card-header">{title}</h5>
                            <div className="d-flex justify-content-center">
                                <h5>Detalle:</h5>
                                <p>{description}</p>
                            </div>
                            <div className="d-flex justify-content-center">
                                <h5>Precio:</h5>
                                <p>${price}</p>
                            </div>
                            <div className="d-flex justify-content-center">
                                <h5>Stock:</h5>
                                <p>{stock}</p>
                            </div>
                            <div id="cantidad">
                                <h5 id="producto"></h5>
                                <img src={Icons[2]} className="sizeIcon"></img>
                            </div>
                            <div id="botonContenedor">
                                <Link to="/">
                                    <button className="botonBack">Volver al Inicio</button>
                                </Link>
                            </div>
                    </div>
                    <div id="contadorOff">
                        <ItemCount stock={5} initial={1} onAdd={onAdd}/>
                    </div>
                </div>
            </div>            
        </div>
    )

}

export default ItemDetail