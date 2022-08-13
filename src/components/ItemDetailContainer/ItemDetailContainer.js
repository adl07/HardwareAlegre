import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import {getProductoDetalle} from "../productos";



const ItemDetailContainer =() =>{

    const [product, setProduct] = useState()
    const {detId} = useParams()

    useEffect(()=>{
        getProductoDetalle(parseInt(detId))
        .then(product => {
            setProduct(product)
        })

}, [detId])
            
    return(
        <div className="">
                <ItemDetail {...product}></ItemDetail> 
        </div>
        
        
    )

}

export default ItemDetailContainer;