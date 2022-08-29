import React from 'react';
import { useCartContext } from "../CartContext/CartContext";
import { Link } from 'react-router-dom';
import { collection, doc, increment, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import { DB } from '../ConfigFb/FiresbaseData';
import "./Cart.css";
import Icons from '../Icons/Icons';
import swal from 'sweetalert';




export default function Cart() {

    const {datoProducto, precioTotal, eliminarProducto, limpiandoCart, precioProducto} = useCartContext();

    const test = useCartContext();
    const createOrder = () =>{
        const createOrderDetail =  test.datoProducto.map(det =>({
            id: det.id,
            title: det.title,
            price: det.price
        }))
        let orden = {
            buyer:{
                name: "Jose Perez",
                phone: "1146347685",
                email: "JosePerez@gmail.com"
            },
            itemsTotal: createOrderDetail,
            date: serverTimestamp(),
            total: test.precioTotal()
            
        }

        const ordenAFirestore = async () =>{
            const nroDePedido = doc(collection(DB, 'orders'))
            await setDoc(nroDePedido, orden)
            return nroDePedido
        }

        ordenAFirestore()
        .then(res =>{
            swal({
                title: "Pedido realizado con exito!",
                icon: "success",
            });
            test.datoProducto.forEach(async (item)=>{
                const descStock = doc(DB, 'products', item.id)
                await updateDoc(descStock, {
                    stock: increment(-item.cantidad)
                })
            })
            test.limpiandoCart()
        })
        .catch(err => console.log(err)); 

    }

    if(datoProducto.length === 0){
        return(
            <div className="row styleCart">
            <div className="fondoCart col-md-6 mt-4 offset-3 text white text-center">
                    <h4>Datos de la compra</h4>
                    <p>No hay productos agregados</p>
                    <Link to="/"> 
                        <img type="button" className="sizeIconShop" src={Icons[3]}></img>
                    </Link>
            </div>
            </div>
        )
        
    }

    return (
        <div className="row styleCart">
            <div className="col-md-6 offset-3 mt-4 text-white text-center">
                {
                datoProducto.map((item)=>{
                return(
                    <div className="d-flex align-items-center fondoCart text-center m-2 fs-5" key={item.id}>
                        <p className="pe-2">Producto:</p>
                        <p className="pe-2">{item.title}</p>
                        <p className="pe-2">Cantidad:</p>
                        <p className="pe-2">{item.cantidad}</p>
                        <img type="button" className="sizeIcon me-2" onClick={()=> eliminarProducto(item.id)} src={Icons[0]}></img>
                        <img type="button" className="sizeIcon" onClick={()=> precioProducto(item.price)} src={Icons[1]}>
                        </img>
                    </div>
                )
                })
                }
                <h4 className="m-3 colorTotal">Precio Total: ${precioTotal().toFixed(3)}</h4>
                <button className="botonesCart" onClick={()=> createOrder()}>Confirmar compra</button>
            </div>
            
        </div>
    )
}
