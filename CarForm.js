// CarForm.js
import React from 'react';
import { useForm } from 'react-hook-form';

const CarForm = ({ onSubmit, car }) => {
  const { register, handleSubmit, setValue } = useForm();

  // Set default values for the form fields if updating a car
  React.useEffect(() => {
    if (car) {
      Object.entries(car).forEach(([key, value]) => {
        setValue(key, value);
      });
    }
  }, [car, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Car Model:
        <input {...register('model')} />
      </label>
      <label>
        Car Year:
        <input {...register('year')} />
      </label>
      {/* Add other fields as needed */}
      <button type="submit">{car ? 'Update Car' : 'Add Car'}</button>
    </form>
  );
};

export default CarForm;