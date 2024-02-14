import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/Landing_Page/LandingPage';
import Login from './Components/Login/Login';
import Sign_Up from './Components/Sign_UP/Sing_Up';

import Layout from './Components/Landing_Page/LandingPage';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
     <Routes path="/" element={<LandingPage/>}/>
     
    
    </BrowserRouter>
   
  );
}

export default App;