import React from "react";
import { Link } from "react-router-dom";


const MarcasHomePage = () =>{
    return(
        <div className="row text-center rounded mx-auto d-flex mt-5">
            <div className="col-4">
                <Link to="/marca/intel">
                    <img src="https://1000marcas.net/wp-content/uploads/2020/02/logo-Intel.png" className="img-fluid w-50"></img>
                </Link>
            </div>
            <div className="col-4">
                <Link to="/marca/ryzen">
                    <img src="https://seeklogo.com/images/R/ryzen-logo-0A21476C3B-seeklogo.com.png" className="img-fluid w-50"></img>
                </Link>
            </div>
            <div className="col-4 mt-3">
                <Link to="/marca/logitech">
                    <img src="https://logodownload.org/wp-content/uploads/2018/03/logitech-logo.png" className="img-fluid w-50"></img>
                </Link>
            </div>
        </div>
    )
}

export default MarcasHomePage