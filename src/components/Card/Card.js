import React, {useState} from 'react'
import "./Card.css"
import 'react-credit-cards/es/styles-compiled.css'
import Cards from 'react-credit-cards'
import swal from 'sweetalert';


export default function Card() {


    const [card, setCard] = useState({

        number: "",
        name: "",
        expiry: "",
        year: "",
        cvc: "",
        focus: ""

    })

    const handleState = (e) =>{
        setCard({
            ...card,
            [e.target.name] : e.target.value
        })
    }

    const handleFocus = (e) =>{
        setCard({
            ...card,
            focus: e.target.name
        })
    }

    const handleValidarNombre = (e) =>{
        if(e.target.value.length >= 8){
            swal({
                text: "Campo completo",
                icon: "success"
            })
        } else swal({
            text: "Completar campo por favor",
            icon: "error"
        })
    }

    const handleValidarTarjeta = (e) =>{
        if(e.target.value.length === 16){
            swal({
                text: "Campo completo",
                icon: "success"
            })
        } else swal({
            text: "Completar campo por favor",
            icon: "error"
        })
    }


    return (
    
        <div className="mt-3 pt-3">
                
                    <Cards
                        number={card.number}
                        name={card.name}
                        expiry={card.expiry}
                        cvc={card.cvc}
                        focused= {card.focus}
                    />
                
                <form className="mt-3">
                    <div className="col-md-6 offset-3">
                        <label htmlFor="name" className="form-label">Nombre y Apellido</label>
                        <input 
                            type="text" 
                            id="name"
                            name="name"
                            className="form-control" 
                            maxLength="16"
                            onChange={handleState}
                            onFocus={handleFocus}
                            onBlur={handleValidarNombre}
                        />
                        <label htmlFor="number" className="form-label">Numero de tarjeta</label>
                        <input 
                            type="text" 
                            id="number"
                            name="number"
                            className="form-control" 
                            maxLength="16"
                            onChange={handleState}
                            onFocus={handleFocus}
                            onBlur={handleValidarTarjeta}
                        />
                    </div>
                    <div className="col-md-6 offset-3 d-flex justify-content-around">
                        <div className="d-block col-md-3 text-center">
                                <label htmlFor="expiry" className="form-label">Expiracion</label>
                                <input
                                    type="text"
                                    id="expiry"
                                    name="expiry"
                                    className="form-control" 
                                    maxLength="4"
                                    onChange={handleState}
                                    onFocus={handleFocus}
                                />
                        </div>
                        <div className="d-block col-md-3 text-center">
                                <label htmlFor="cvc" className="form-label">CVC</label>
                                <input
                                    type="text"
                                    id="cvc"
                                    name="cvc"
                                    className="form-control" 
                                    maxLength="4"
                                    onChange={handleState}
                                    onFocus={handleFocus}
                                />
                        </div>
                    </div>
                </form>
        </div>
        
    )
}

