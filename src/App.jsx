// App.js
import React from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/shared/NavBar/NavBar'
import Inicio from './pages/Inicio'
import Servicios from './pages/Servicios';
import Productos from './pages/Productos';
import ReservasyContactos from './pages/ReservasyContactos'
import Footer from './components/shared/Footer/Footer'
import Salon from './components/CompServicios/ButtonsServ/Salon/Salon';
import RegisterPage from './pages/RegisterPage';
function App() {
  return (
    <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="servicios" element={<Servicios/>} />
            <Route path="/productos" element={<Productos/>} />
            <Route path="/reservas-contactos" element={<ReservasyContactos/>} />
            <Route path="/salon" element={<Salon/>} />
            <Route path="/registerPage" element={<RegisterPage/>} />
          </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
