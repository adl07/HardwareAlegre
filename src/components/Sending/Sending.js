import React, { useState } from 'react'
import Select from 'react-select'
import swal from 'sweetalert'
import "./Sending.css"


const valueProvince = [
    {label: 'CABA' , value: 'CABA' },
    {label: 'Buenos Aires' , value: 'Buenos Aires'},
    {label: 'Mendoza' , value: 'Mendoza'},
    {label: 'Cordoba' , value: 'Cordoba'}
]

const valueDestiny = [
    {label: 'Domicilio' , value: 'Domicilio'},
    {label: 'Sucursal' , value: 'Sucursal'}
]

const valueAvailable = [
    {label: '24hs' , value: 0},
    {label: '5 dias habiles' , value: 1},
    {label: '14 dias habiles' , value: 2},
]


export default function Sending() {

    const [available, setAvailable] = useState()


    const handleSelectChange = () =>{ 
    }

    const handleSelectChange2 = () =>{

    }

    const handleSelectChange3 = ({value}) =>{
        let stateAvailable = (value)

        if(stateAvailable === 0 ){
            return swal({
                text: "Costo de envio 950 pesos",
                icon: "info"
            });
        }
        else if(stateAvailable === 1){
            return swal({
                text:"Costo de envio 500 pesos",
                icon:"info"
            });
        }
        else if(stateAvailable === 2){
            return swal({
                text:"200 pesos",
                icon:"info"
            })
        }
        else (console.log("error"))
    }
    return (
    <section id="envio">
        <div className="row mt-5 posicion">
            <div id="consultarEnvio" className="col-md-4 offset-4 colorDeFondoFormulario">
                <form>
                    <div className="m-3">
                        <label htmlFor="exampleInputEmail" className="form-label text-dark">Provincia</label>
                            <Select
                                defaultValue={{label:'Seleccione localidad', value:'Seleccione localidad'}}
                                options={valueProvince}
                                onChange= {handleSelectChange}
                            />
                    </div>
                    <div className="m-3">
                        <label htmlFor="exampleInputEmail" className="form-label text-dark">Destino</label>
                        <Select
                                defaultValue={{label:'Seleccione destino', value:'Seleccione destino'}}
                                options={valueDestiny}
                                onChange= {handleSelectChange2}
                            />
                    </div>
                    <div className="m-3">
                        <label htmlFor="exampleInputEmail" className="form-label text-dark">Periodo de entrega</label>
                            <Select
                                defaultValue={{label:'Dias de entrega', value:'Dias de entrega'}}
                                options={valueAvailable}
                                onChange= {handleSelectChange3}
                            />
                    </div>
                </form>
            </div>
        </div>
    </section>
    )
}
