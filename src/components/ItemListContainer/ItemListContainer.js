import React from "react";


export default function ItemListContainer(props){
    return(
    <div class="alert alert-success alert-dismissible fade show text-center" role="alert">
        <strong>{props.getting}</strong> 
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    );
}