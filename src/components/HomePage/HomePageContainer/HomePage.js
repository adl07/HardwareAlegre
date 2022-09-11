import React from "react";
import Carrusel from "../Carrusel/Carrusel";
import MarcasHomePage from "../MarcasHomePage/MarcasHomePage";


export default function HomePageContainer (){
    return(
        <div>
            <Carrusel/>
            <div className="mt-5 mx-4">
                <img src="https://cdn.jsdelivr.net/gh/persano/BannersWebMaximus/top-under-header/mejores-precios-main-top.webp" className="w-100"></img>
            </div>
            <div>
                <MarcasHomePage/>
            </div>
        </div>
    )
}
