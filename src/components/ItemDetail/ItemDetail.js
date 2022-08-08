import React from "react";
import "../ItemListContainer/ItemListContainer.css";



function ItemDetail({item}){
    return(
        <div>
            {
            item.map((prod)=>{
                return(
                    <div className="styleFondo">
                        <div className="styleFondoImagen">
                        <img src={prod.pic} className="styleImagen"></img>
                        </div>  
                        <div className="styleCard">
                            <h5><span className="styleText">Producto: </span>{prod.titleProduct}</h5>
                            <h5><span className="styleText">Precio: </span>{prod.price}</h5>
                            <h5><span className="styleText">Descpiption: </span>{prod.descpiption}</h5>
                        </div>
                    </div>
                )
            })
        }
        </div>
        
    )      
}

export default ItemDetail;