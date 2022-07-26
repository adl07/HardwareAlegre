import React from 'react';
import './App.css';
import NavBar from './components/Container/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

export default function App() {
  return (
        <div className="row">
          <div className="col">
            <NavBar/>
          </div>
          <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <ItemListContainer getting="Bienvenidos!"></ItemListContainer>
            </div>
          </div>
          </div>
        </div>
  );
}


