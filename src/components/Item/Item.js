import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({id, title, image, price, description})=>{
    return(             
        <div className="row">
            <div className="col-4 offset-4 mt-4 styleFondo" key={id}>
                <img src={image} className="img-fluid mt-2"/>
                    <div className="styleCard">
                            <h5>{title}</h5>
                            <h5><span className="styleText">Precio:</span>${price}</h5>
                            <Link to={`/detalle/${id}`}>
                                <button className="styleBoton">Ver más</button>
                            </Link>
                    </div>
            </div>
        </div>
            )
}

export default Item