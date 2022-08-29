import React from "react";
import { useParams} from "react-router-dom";
import { collection, getDocs, where, query} from "firebase/firestore";
import MarcasList from "../MarcasList/MarcasList";
import { useEffect, useState } from "react";
import { DB } from "../../ConfigFb/FiresbaseData";

export default function MarcasContainer(){

    const [marca, setMarca]= useState([])
    const {catMarca} = useParams();

    useEffect(()=>{
        const marcasCollection = collection(DB, 'products');
        if(catMarca){
            const marcaFiltrada = query(marcasCollection, where('marca', '==', catMarca));
            getDocs(marcaFiltrada)
            .then(resp => setMarca((resp.docs.map(product =>({id: product.id, ...product.data()})))))
        } else{
            console.log("error de categoria")
        } 
    }, [catMarca])

    return(
        <MarcasList product={marca}/>
    )
}