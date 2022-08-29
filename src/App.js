import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/Container/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CartCustomContext from './components/CartContext/CartContext';
import CartWidget from './components/CartWidget/CartWidget';
import HomePage from './components/HomePage/HomePage'
import MarcasContainer from './components/HomePage/Marcas/MarcasContainer';





export default function App() {
  
  return (
        <CartCustomContext>
          
          <BrowserRouter>
          <div className="row">
            <NavBar/>
            
          <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/' element={<CartWidget/>}/>
              <Route path='/categoria/:catId' element={<ItemListContainer/>}/>
              <Route path='/detalle/:detId' element={<ItemDetailContainer/>}/>
              <Route path='/marca/:catMarca' element={<MarcasContainer/>}/>
              <Route path='/Cart' element={<Cart/>}/>
              <Route path='/Cart' element={<CartWidget/>}/>
          </Routes>
          </div>
          </BrowserRouter>

        </CartCustomContext> 
  );
}


