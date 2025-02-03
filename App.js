import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CarDetails from './components/CarDetails';
import AddCarForm from './components/AddCarForm';
import EditCarForm from './components/EditCarForm';
import './App.css';

import compactcar from './assets/compact-car.jpg';
import luxurycar from './assets/luxury-car.jpg';
import suv from './assets/SUV.jpg';
import van from './assets/van.jpg';

function App() {
  const [cars, setCars] = useState([
    { id: 1, name: 'Compact Car', type: 'Compact', price: 50, image: compactcar },
    { id: 2, name: 'Luxury Car', type: 'Luxury', price: 200, image: luxurycar },
    { id: 3, name: 'SUV', type: 'SUV', price: 80, image: suv },
    { id: 4, name: 'Van', type: 'Van', price: 150, image: van}
  ]);

  const addCar = (car) => {
    setCars((prevCars) => [...prevCars, car]); // מוסיף רכב חדש לרשימה
  };

  const updateCar = (updatedCar) => {
    setCars((prevCars) => prevCars.map(car => (car.id === updatedCar.id ? updatedCar : car)));
  };

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home cars={cars} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/details/:id" element={<CarDetails cars={cars} />} />
          <Route path="/add-car" element={<AddCarForm addCar={addCar} />} />
          <Route path="/edit/:id" element={<EditCarForm cars={cars} updateCar={updateCar} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
