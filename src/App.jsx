import React from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import About from "./pages/Home/Home";
import Shop from "./pages/Home/Home";
import Contact from "./pages/Home/Home";
import Navigation from './components/Navigation/Navigation';
import "./App.css";

const App = () => {
  return (
    <div className='wix-template d-center column'>
      <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route path="/*" element={<Navigate to={"/home"}/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<Shop/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;