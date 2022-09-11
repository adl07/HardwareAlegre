import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../CartContext/CartContext";
import Icons from "../Icons/Icons";
import "./CartWidget.css";

export default function CartWidget(){
    
    const {datoProducto, totalDeProductos} = useCartContext();

    if(datoProducto.length === 0){
        return(
            <div className="d-flex d-none">
                <Link to="/Cart">
                    <img src={Icons[7]}></img>
                </Link>
                <span id="cartItem" className="text-white">{totalDeProductos()}</span>
            </div>
        )
    }  return(
        <div className="d-flex">
            <Link to="/Cart">
                <img className="iconSytleCart" src={Icons[7]}></img>
            </Link>
            <span className="text-white">{totalDeProductos()}</span>
        </div>
    )
}