import React from "react";
import MarcasDetail from "../MarcasDetail/MarcasDetail";



const MarcasList = ({product}) =>{

    return( 
            <div>
                {product.map((prod)=>
                    <MarcasDetail key= {prod.id} {...prod}/>)}
            </div>
    )
}


export default MarcasList