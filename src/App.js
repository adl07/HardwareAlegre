import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/Container/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

export default function App() {
  
  return (
        <div className="row bg-dark">
          <BrowserRouter>
            <NavBar/>
          <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/categoria/:catId' element={<ItemListContainer/>}/>
              <Route path='/detalle/:detId' element={<ItemDetailContainer/>}/>
          </Routes>
          </BrowserRouter> 

        </div>
  );
}


