import React from "react";
import {useState, useEffect } from "react";
import getData from "../ItemList/ItemList";
import "./ItemListContainer.css";


export default function ItemListContainer(props){
    const [info, setInfo] = useState([])

    useEffect(()=>{
    getData
    .then((respuesta)=> setInfo(respuesta))
    .catch(error=>console.error(error))
    }, [])

    return(
    <div className="row">
        <div className="col">
            <div class="alert alert-success alert-dismissible fade show text-center" role="alert">
                <strong>{props.getting}</strong> 
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
        <div class="row">
            <div class="col d-flex justify-content-around m-3 ">
                {
                    info.map((usuario)=>{
                        return(
                            <div class="styleFondo" key={usuario.id}>
                                <div className="styleFondoImagen">
                                    <img src={usuario.pictureUrl} className="styleImagen"></img>
                                </div>
                                <div className="styleCard">
                                    <h5>{usuario.title}</h5>
                                    <h5><span className="styleText">Precio:</span>{usuario.price}</h5>
                                    <h5><span className="styleText">Precio:</span>{usuario.description}</h5>
                                    <button className="styleBoton">Ver más</button>   
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
    );
}