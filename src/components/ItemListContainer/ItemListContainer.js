import React from "react";
import {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { DB } from "../ConfigFb/FiresbaseData";
import Loading from "../Loading/Loading";



export default function ItemListContainer(props){
    const [info, setInfo] = useState([])
    const [loading, setLoading] = useState(false)
    const {catId} = useParams()

    useEffect(()=>{
        const productsCollection = collection(DB, 'products');
        setLoading(true)
        if(catId){
            const productosFiltrados = query(productsCollection, where('categoria', '==', catId))
            getDocs(productosFiltrados)
            .then(resp => setInfo(resp.docs.map(product =>({id: product.id, ...product.data()}))));
        } else{
            getDocs(productsCollection)
            .then(resp => setInfo(resp.docs.map(product =>({id: product.id, ...product.data()}))));
        }
        setLoading(false)
    }, [catId])

    return(
        <>  
            {loading && <Loading/>}
            <ItemList productos={info}/>
        </>
        
    );
}