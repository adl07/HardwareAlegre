import React from 'react';
import './App.css';
import NavBar from './components/Container/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

export default function App() {
  
  return (
        <div className="row bg-dark">
          <div className="col">
            <NavBar/>
          </div>
          <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <ItemListContainer getting="Bienvenidos!"></ItemListContainer>
            </div>
          </div>
          <div className="row">
            <div className="col offset-md-4 pt-3">
              <ItemCount stock="3" initial="1"></ItemCount>
            </div>
          </div>
          <div className="row">
              <div className="col">
              </div>
          </div>
          </div>
        </div>
  );
}


