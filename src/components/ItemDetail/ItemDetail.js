import React from "react";


const ItemDetail = ({price, title,description})=>{

    return(
        <div className="">
            <h4>{price}</h4>
            <h4>{title}</h4>
            <h4>{description}</h4>
        </div>
    )

}

export default ItemDetail