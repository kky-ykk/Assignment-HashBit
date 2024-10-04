import React from 'react';
import { useLocation } from 'react-router-dom';

const BookingConfirmation = () => {
  const location = useLocation();
  const { bookingData } = location.state;
  const bookingId = Math.floor(1000 + Math.random() * 9000); // Random booking ID

  return (
    <div>
      <h2>Booking Confirmed</h2>
      <p>Booking ID: {bookingId}</p>
      <p>Name: {bookingData.name}</p>
      <p>Email: {bookingData.email}</p>
      <p>Mobile: {bookingData.mobile}</p>
    </div>
  );
};

export default BookingConfirmation;
