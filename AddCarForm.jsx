import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AddCarForm.css';

function AddCarForm({ addCar }) {
  const [carData, setCarData] = useState({ name: '', type: '', price: '', image: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCarData({ ...carData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCar = { ...carData, id: Date.now(), price: parseInt(carData.price) };
    addCar(newCar);
    navigate('/');
  };

  return (
    <div className="add-car-form">
      <h1>Add New Car</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={carData.name} onChange={handleChange} required />
        </label>
        <label>
          Type:
          <input type="text" name="type" value={carData.type} onChange={handleChange} required />
        </label>
        <label>
          Price:
          <input type="number" name="price" value={carData.price} onChange={handleChange} required />
        </label>
        <label>
          Image URL:
          <input type="text" name="image" value={carData.image} onChange={handleChange} required />
        </label>
        <button type="submit">Add Car</button>
      </form>
    </div>
  );
}

export default AddCarForm;
