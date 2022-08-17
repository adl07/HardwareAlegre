import React, { useContext, useState } from 'react'

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export default function CartCustomContext({children}) {

    const  [carrito, setCarrrito] = useState([]);

    const modificandoCart = (id) =>{
        setCarrrito([...carrito, id]);
        console.log("elementos del producto", carrito)
    }

    const limpiandoCart = () => setCarrrito([]);

    const corroborarCart = (id) => carrito.find(product => product.id === parseInt(id)) ? true: false;

    const eliminarProducto = (id) => setCarrrito(carrito.filter(product=> product.id !== parseInt(id)));

    const precioTotal = () => {
        return carrito.reduce((prev, act) => prev + act.cantidad * act.price, 0)
    }

    const totalDeProductos = () =>{
        return carrito.reduce((agregado, productoActual) => agregado + productoActual.cantidad, 0);
    }

    return (
        <CartContext.Provider value={{modificandoCart, datoProducto: carrito, corroborarCart,limpiandoCart, eliminarProducto, precioTotal,totalDeProductos }}>
            {children}
        </CartContext.Provider>);
}
