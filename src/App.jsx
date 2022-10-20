import React from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Navigation from './components/Navigation/Navigation';
import "./App.css";
import Footer from './components/Footer/Footer';
import Product from './pages/Product/Product';

const App = () => {
  return (
    <div className='wix-template d-center column'>
      <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route path="/*" element={<Navigate to={"/home"}/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/produit/:id" element={<Product/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;