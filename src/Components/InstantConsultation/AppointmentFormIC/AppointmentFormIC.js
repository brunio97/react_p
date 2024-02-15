import React, { useState } from 'react'

const AppointmentFormIC = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);

  
    const handleSlotSelection = (slot) => {
      setSelectedSlot(slot);
    };
    const handleDateSelection = (date) => {
        setSelectedDate(date);
      };

    const handleFormSubmit = (e) => {
      e.preventDefault();
      onSubmit({ name, phoneNumber });
      setName('');
      setPhoneNumber('');
      setSelectedSlot(null);
      setSelectedDate(null);
    };

    const timeSlots = [
        '09:00 AM - 11:00 AM',
        '11:00 AM - 01:00 PM',
        '01:00 PM - 03:00 PM',
        '03:00 PM - 05:00 PM',
      ];
  
    return (
      <form onSubmit={handleFormSubmit} className="appointment-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
        <label htmlFor="date">Select Date:</label>
        <input
          type="date"
          id="date"
          value={selectedDate}
          onChange={(e) => handleDateSelection(e.target.value)}
          required
        />
      </div>
        
      <div className="form-group">
        <label htmlFor="slot">Select Time Slot:</label>
        <select
          id="slot"
          value={selectedSlot}
          onChange={(e) => handleSlotSelection(e.target.value)}
          required
        >
          <option value="">Select a Time Slot</option>
          {timeSlots.map((slot) => (
            <option key={slot} value={slot}>
              {slot}
            </option>
          ))}
        </select>
      </div>
        
        
        <button type="submit">Book Now</button>
      </form>
    );
  };

export default AppointmentFormIC
