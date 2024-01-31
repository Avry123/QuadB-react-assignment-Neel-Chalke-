// UserDetailsForm.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../src/assets/UserDetailsForm.css';

function UserDetailsForm() {
  const { showName } = useParams();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    address: '',
    age: '',
    gender: 'male',
  });

  useEffect(() => {
    const storedData = localStorage.getItem('userDetailsFormData');
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('userDetailsFormData', JSON.stringify(formData));
  }, [formData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with data:', formData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="form-container">
      <h1>{showName}</h1>
      <form onSubmit={handleSubmit} className="mui-form">
        <div className="mui-textfield">
          <label>
            Full Name:
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
          </label>
        </div>
        <div className="mui-textfield">
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
        </div>
        <div className="mui-textfield">
          <label>
            Phone Number:
            <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
          </label>
        </div>
        <div className="mui-textfield">
          <label>
            Address:
            <textarea name="address" value={formData.address} onChange={handleChange} required />
          </label>
        </div>
        <div className="mui-textfield">
          <label>
            Age:
            <input type="number" name="age" value={formData.age} onChange={handleChange} required />
          </label>
        </div>
        <div className="mui-select">
          <label>
            Gender:
            <select name="gender" value={formData.gender} onChange={handleChange}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>
        <button type="submit" className="mui-button">Submit</button>
      </form>
    </div>
  );
}

export default UserDetailsForm;
