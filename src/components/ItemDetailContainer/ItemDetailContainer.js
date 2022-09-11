import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { DB } from "../ConfigFb/FiresbaseData";
import { doc, getDoc} from "firebase/firestore";
import Loading from "../Loading/Loading";



const ItemDetailContainer =() =>{

    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(false)
    const {detId} = useParams()

    useEffect(()=>{
        const intemRef = doc(DB, 'products', detId)
        setLoading(true)
        getDoc(intemRef).then((resp) =>{
            if(resp.exists()){
                setProduct({id: resp.id, ...resp.data()})
            }

            setLoading(false)
        });
    }, [detId])

        return(
                <div>
                    {loading && <Loading/>}
                    <ItemDetail {...product}></ItemDetail> 
                </div>
        )
            
        

    }


export default ItemDetailContainer;