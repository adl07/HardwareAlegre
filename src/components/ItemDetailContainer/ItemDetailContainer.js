import React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import producto from "../../producto";




const getItem = () => new Promise((resolve, reject) =>{ 
    let estado = true;
    if(estado){
    setTimeout(()=>{
        resolve(producto)
    }, 2000);
}
    else{
    reject(console.log("No hay datos"))
}
});


function ItemDetailContainer (){

    const [prod, setProd] = useState([])

    useEffect(()=>{
        getItem()
        .then(prod =>{
            setProd(prod)
        })
        .catch(error =>{
            console.log(error)
        })
    }, [])

    return(
        <ItemDetail item={prod}/>
    )

}

export default ItemDetailContainer;