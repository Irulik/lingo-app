import React, { useState } from "react";
import "./RegistrationPopup.css";
import { Formik, Form } from "formik";

const RegistrationPopup = ({ onClose, onSignUp }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Call the onSignUp function with the form data
    onSignUp(formData);
  };

  return (
    <Formik>
      <div className="popup-container js-popup-container">
        <div className="popup-box">
          <button className="modal-close-btn" onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="none"
            >
              <path
                stroke="#121417"
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2.5"
                d="M24 8 8 24M8 8l16 16"
              />
            </svg>
          </button>

          <h2 className="popup-title">Registration</h2>
          <p className="popup-text">
            Thank you for your interest in our platform! In order to register,
            we need some information. Please provide us with the following
            information
          </p>

          <form className="popup-reg-form" onSubmit={handleSubmit}>
            <div className="popup-reg-group">
              <input
                type="text"
                className="form-input"
                placeholder="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                pattern="[a-zA-Zа-яА-Я]+"
                maxLength="20"
              />
            </div>

            <div className="popup-reg-group">
              <input
                type="email"
                className="form-input"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="popup-reg-group">
              <input
                type="password"
                className="form-input"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="popup-reg-btn">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </Formik>
  );
};

export default RegistrationPopup;
