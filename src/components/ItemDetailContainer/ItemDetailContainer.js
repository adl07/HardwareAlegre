import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { DB } from "../FiresbaseData";
import { doc, getDoc } from "firebase/firestore";
import App from "../../App";
import { getProductDetail } from "../productos";
import { getFirestore } from "firebase/firestore";

const ItemDetailContainer =() =>{

    const [product, setProduct] = useState()
    const {detId} = useParams()

    useEffect(()=>{

        const intemRef = doc(DB, 'Productos', detId)
        getDoc(intemRef).then((resp) =>{
            if(resp.exists()){
                setProduct({id: resp.id, ...resp.data()})
            }
        });
    
    }, [detId])
    
        return(

            <div>
                <ItemDetail {...product}></ItemDetail> 
            </div>
        )

    }


export default ItemDetailContainer;