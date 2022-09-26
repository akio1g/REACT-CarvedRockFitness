import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Products from "./Products";
import Detail from "./Detail";

export default function App() {
  

  return (
    <>
      <div className="content">
        <Header />
        <main>
          <Routes>
            <Route path='/:category' element={<Products />} />
            <Route path='/:category/:id' element={<Detail />} />
            <Route path='/cart' element={<h1>WE'RE ON CART</h1>} />
            <Route path='/' element={<h1>WELCOME TO CARVED ROCK FITNESS</h1>} />
          </Routes> 
          
        </main>
      </div>
      <Footer />
    </>
  );
}
