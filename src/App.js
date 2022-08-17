import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/Container/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CartCustomContext from './components/CartContext/CartContext';
import CartWidget from './components/CartWidget/CartWidget';

export default function App() {
  
  return (
        <CartCustomContext>
          
          <BrowserRouter>
          <div className="row bg-dark">
            <NavBar/>
            
          <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/categoria/:catId' element={<ItemListContainer/>}/>
              <Route path='/detalle/:detId' element={<ItemDetailContainer/>}/>
              <Route path='/Cart' element={<Cart/>}/>
              <Route path='/Cart' element={<CartWidget/>}/>
          </Routes>
          </div>
          </BrowserRouter>

        </CartCustomContext> 
  );
}


