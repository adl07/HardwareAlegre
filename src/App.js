import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/Container/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CartCustomContext from './components/CartContext/CartContext';
import CartWidget from './components/CartWidget/CartWidget';
import{ getFirestore, collection, getDocs} from 'firebase/firestore';



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrK5Lq5KkZ6PEXw-wBaAH0EOl0nWmclrQ",
  authDomain: "hardwarealegre.firebaseapp.com",
  projectId: "hardwarealegre",
  storageBucket: "hardwarealegre.appspot.com",
  messagingSenderId: "465989190026",
  appId: "1:465989190026:web:8fc546cafae70709bac873"
};




export default function App() {

  useEffect(()=>{

    // Initialize Firebase
  const app = initializeApp(firebaseConfig);
    //selcciono la base de firestore
  const db = getFirestore(app);
  //creo la referencia de la coleccion que voy a traer
  const colRef = collection(db, 'Productos');
  getDocs(colRef).then((snapshot) =>{
    console.log("snapshot:", snapshot.docs);
    
    const prodcutosConFormato = snapshot.docs.map((rawDoc)=>{
      return{
        id: rawDoc.id,
        ...rawDoc.data()
      }
    })

    console.log("resultado:", prodcutosConFormato)

  }, (error) =>{
    console.log("error al traer los docs")
}, [])


  })

  
  return (
        <CartCustomContext>
          
          <BrowserRouter>
          <div className="row bg-dark">
            <NavBar/>
            
          <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/' element={<CartWidget/>}/>
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


