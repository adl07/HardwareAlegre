import React from "react";
import {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {getData , getCategoria} from "../productos";
import ItemList from "../ItemList/ItemList";



export default function ItemListContainer(props){
    const [info, setInfo] = useState([])
    const {catId} = useParams()

    useEffect(()=>{
        if(!catId){
            getData().then(info=> {setInfo(info)
            })
        }
        else{
            getCategoria(catId).then(info =>{
                setInfo(info)
            })
        }
        }, [catId])

    return(
    <div>
        <ItemList productos={info}/>
    </div>

    );
}