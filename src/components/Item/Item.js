import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({id, title, pictureUrl, price, description})=>{
    return(    
                            <div className="styleFondo" key={id}>
                                <div className="styleFondoImagen">
                                <img src={pictureUrl} className="styleImagen"/>
                            </div>
                        <div className="styleCard">
                            <h5>{title}</h5>
                            <h5><span className="styleText">Precio:</span>${price}</h5>
                            <h5><span className="styleText">Precio:</span>{description}</h5>
                            <Link to={`/detalle/${id}`}>
                            <button className="styleBoton">Ver más</button>
                            </Link>
                        </div>
                        </div>
            )
}

export default Item