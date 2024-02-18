// App.js
import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/Landing_Page/LandingPage';
import Login from './Components/Login/Login';
import Sign_Up from './Components/Sign_UP/Sign_Up';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
import Notification from './Components/Notification/Notification';
import FindDoctorSearchIC from './Components/InstantConsultation/FindDoctorSearchIC/FindDoctorSearchIC';
import BookingConsultation from './Components/BookingConsultation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Notification />
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign_up" element={<Sign_Up />} />
          <Route path="/instant-consultation" element={<InstantConsultation />} />
          <Route path='/search/doctors' element={<BookingConsultation />} /> 
          {/* Agrega más rutas para otras páginas si es necesario */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;