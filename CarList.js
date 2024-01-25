// CarList.js
import React from 'react';
import CarForm from './CarForm';

const CarList = ({ cars, onDelete, onUpdate }) => {
  return (
    <div>
      {cars.map((car) => (
        <div key={car.id}>
          <p>{car.model}</p>
          <p>{car.year}</p>
          {/* Display other car details */}
          <button onClick={() => onDelete(car.id)}>Delete</button>
          <CarForm onSubmit={(data) => onUpdate(car.id, data)} car={car} />
        </div>
      ))}
    </div>
  );
};

export default CarList;