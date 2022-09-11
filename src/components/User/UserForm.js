import React from 'react'
import swal from 'sweetalert';
import "./UserForm.css"


export const UserForm = ({estado, cambiarEstado,tipo, label, name, expresionRegular, mensajeError, alert, valido}) => {

    
    const changeEstado = (e) =>{
        cambiarEstado({...estado, campo: e.target.value})
    }

    
    const validarCampo = () =>{
        if(expresionRegular){
            if(expresionRegular.test(estado.campo)){
                cambiarEstado({...estado, valido: 'true'})
                swal("Campo correctamente completado", {
                    icon: "success",
                    })
            } else {
                cambiarEstado({...estado, valido: 'false'})
                swal("Completar campo correctamente", {
                    icon: "error",
                    })
            }
        }
    }



    return (
        <div className="col-md-4 offset-4">
            <form>
                <div className="mb-3">
                    <label htmlFor={name} className="form-label">{label}</label>
                    <div className="styleInputs">
                        <input onChange={changeEstado} value={estado.campo} type={tipo} onBlur={validarCampo} valido={estado.valido} class="form-control" id={name}/>
                    </div>
                    <div className="d-flex">
                        <span>{alert}</span>
                        <p className="styleError">{mensajeError}</p>
                    </div>
                    
                </div>
            </form>
        </div>
    )
}
