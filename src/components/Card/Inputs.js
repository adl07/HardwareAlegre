import React from 'react'

export default function Inputs ({tipo, name}) {
    return (
        <div>
            <label htmlFor={name} class="form-label">Numero de tarjeta</label>
                    <input
                        type={tipo}
                        id={name}
                        name={name}
                        className="form-control" 
                        maxLength="16"
                        />
        </div>
    )
}
