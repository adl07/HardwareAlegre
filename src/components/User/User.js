import React, { useState } from 'react'
import { UserForm } from './UserForm'
import {expresiones} from './UserFormConst'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import "./UserForm.css"




export default function User() {

    const [userId, setUser] = useState({campo:"", valido: null})
    const [pass, setPass] = useState({campo:"", valido: null})

    const registroUser = () =>{

        let user = userId.campo
        let passUser = pass.campo
    
        localStorage.setItem("datosLogin", JSON.stringify([passUser, user]));

        console.log("email:" + user + " " + "password:" + passUser)

        return(
            document.getElementById("welcomeUser").style.display= 'block',
            document.getElementById("welcomeUser").style.display= 'flex',
            document.getElementById("toolTip").innerHTML= "Hola" + " " + user
        )
    }

    return (
            <form>
                <div className="col-md-6 offset-3 styleUserForm">
                    <UserForm
                        tipo="text" 
                        label="Usuario" 
                        name ="usuario" 
                        expresionRegular={expresiones.usuario}
                        estado = {userId}
                        cambiarEstado = {setUser}
                    />

                    <UserForm
                        tipo="password" 
                        label="Contraseña" 
                        name ="password" 
                        expresionRegular={expresiones.password}
                        estado = {pass}
                        cambiarEstado = {setPass}
                        mensajeError = "Debe contar con 4 a 12 caracteres"
                        alert= {<FontAwesomeIcon icon={faTriangleExclamation}/>}
                    />

                    <div className="col text-center">
                        <button type="button" class="botonUser" onClick={registroUser}>Ingresar</button>
                    </div>
                </div>
            </form>
            
    )
}
