import React from "react";
import Item from "../Item/Item";

const ItemList = ({productos}) =>{
    return(
        <div className="d-flex justify-content-around m-3 bg-dark">
            {productos.map((prod)=>
                <Item key= {prod.id} {...prod}/>)}
        </div>
    )
}

export default ItemList