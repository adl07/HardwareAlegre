import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CartCustomContext from './components/CartContext/CartContext';
import CartWidget from './components/CartWidget/CartWidget';
import HomePageContainer from './components/HomePage/HomePageContainer/HomePage';
import MarcasContainer from './components/HomePage/Marcas/MarcasContainer';
import User from './components/User/User';
import Sending from './components/Sending/Sending';
import CardContainer from './components/Card/CardContainer';





export default function App() {
  
  return (
        <CartCustomContext>
          
          <BrowserRouter>
              <div className="row">
                <NavBar/>
            
                <Routes>
                  <Route path='/' element={<HomePageContainer/>}/>
                  <Route path='/' element={<CartWidget/>}/>
                  <Route path='/categoria/:catId' element={<ItemListContainer/>}/>
                  <Route path='/detalle/:detId' element={<ItemDetailContainer/>}/>
                  <Route path='/marca/:catMarca' element={<MarcasContainer/>}/>
                  <Route path='/Cart' element={<Cart/>}/>
                  <Route path='/Cart' element={<CartWidget/>}/>
                  <Route path='/User' element={<User/>}/>
                  <Route path='/Sending' element={<Sending/>}/>
                  <Route path='/Card' element={<CardContainer/>}/>
                </Routes>
            </div>
          </BrowserRouter>

        </CartCustomContext> 
  );
}


