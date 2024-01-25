// App.js
import React, { useState } from 'react';
import CarList from './CarList';

const App = () => {
  const [cars, setCars] = useState([]);

  const handleAddCar = (data) => {
    // Add logic to send data to your server and update state
    setCars([...cars, { id: Date.now(), ...data }]);
  };

  const handleUpdateCar = (carId, data) => {
    // Add logic to send update request to your server and update state
    setCars((prevCars) =>
      prevCars.map((car) => (car.id === carId ? { ...car, ...data } : car))
    );
  };

  const handleDeleteCar = (carId) => {
    // Add logic to send delete request to your server and update state
    setCars((prevCars) => prevCars.filter((car) => car.id !== carId));
  };

  return (
    <div>
      <CarForm onSubmit={handleAddCar} />
      <CarList cars={cars} onDelete={handleDeleteCar} onUpdate={handleUpdateCar} />
    </div>
  );
};

export default App;