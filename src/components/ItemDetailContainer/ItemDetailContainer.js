import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import {getProductoDetalle} from "../productos";



const ItemDetailContainer =() =>{

    const [produc, setProduct] = useState([])
    const {detId} = useParams()

    useEffect(()=>{
        getProductoDetalle(detId)
        .then(produc => {
            setProduct(produc)
        })

}, [detId])
            
    return(
        <div>
            <h1 className="text-white">Detalles</h1>
            <ItemDetail {...produc}></ItemDetail>
        </div>
        
        
    )

}

export default ItemDetailContainer;