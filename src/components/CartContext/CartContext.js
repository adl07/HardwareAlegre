import React, { useContext, useState } from 'react'
import swal from 'sweetalert'


export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export default function CartCustomContext({children}) {

    const  [carrito, setCarrrito] = useState([]);
    
    

    const modificandoCart = (id) =>{
        setCarrrito([...carrito, id]);
        console.log("elementos del producto", carrito)
        localStorage.setItem("productos", JSON.stringify([carrito]))
    }

    const limpiandoCart = () => setCarrrito([]);

    const corroborarCart = (id) => carrito.find(product => product.id === id) ? true: false;

    const eliminarProducto = (id) => setCarrrito(carrito.filter(product=> product.id !== id));

    const precioTotal = () => {
        return carrito.reduce((prev, act) => prev + act.cantidad * act.price, 0)
    }

    const totalDeProductos = () =>{
        return carrito.reduce((agregado, productoActual) => agregado + productoActual.cantidad, 0);
    }
    

    const precioProducto = (price) =>{
            return swal("Valor del componente $" + price)
        }

    return (
        <CartContext.Provider value={{modificandoCart, datoProducto: carrito, corroborarCart,limpiandoCart, eliminarProducto, precioTotal,totalDeProductos, precioProducto }}>
            {children}
        </CartContext.Provider>);
}
