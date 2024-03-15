import React, { useState, useEffect } from "react";
import "./LoginPopup.css";
import { logInUser } from "./firebase/auth.js";
import { favCreator } from "./favorites.js";
import Auth from "../../Auth/Auth.jsx";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from 'yup';

const initialValues = {
  login: " ",
  password: " "
};

export const LoginForm = () => {
  const handleSubmit = (values, {resetForm}) => {
    console.log(values);
    resetForm();
  };

const LoginPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const showLoginPopup = () => {
    setShowPopup(true);
    document.body.classList.add("no-scroll");
  };

  const hideLoginPopup = () => {
    setShowPopup(false);
    document.body.classList.remove("no-scroll");
  };

  const handleOverlayClick = e => {
    if (e.target.classList.contains("js-popup-container")) {
      hideLoginPopup();
    }
  };

  const handleFormSubmit = e => {
    try {
      e.preventDefault();
      const { email, password } = Object.fromEntries(new FormData(e.target));
      logInUser(email, password);
      console.log("success inside");
      hideLoginPopup();
      favCreator();
    } catch ({ message }) {
      console.log(message);
    }
  };

  useEffect(() => {
    const logInLinkEl = document.getElementById("logInLink");
    const logInButtonEl = document.getElementById("logInButton");

    logInLinkEl.addEventListener("click", showLoginPopup);
    logInButtonEl.addEventListener("click", showLoginPopup);

    return () => {
      logInLinkEl.removeEventListener("click", showLoginPopup);
      logInButtonEl.removeEventListener("click", showLoginPopup);
    };
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}>
      <form autoComplete="off">
      <div
        className={`popup-container js-popup-container js-login-popup-container ${showPopup
          ? "show"
          : ""}`}
        onClick={handleOverlayClick}
      >
        <div className="popup-box">
          <button className="modal-close-btn" onClick={hideLoginPopup}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="none"
            >
              <path
                stroke="#121417"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.5"
                d="M24 8 8 24M8 8l16 16"
              />
            </svg>
          </button>

          <h2 className="popup-title">Log in</h2>
          <p className="popup-text">
            Thank you for your interest in our platform! In order to register,
            we need some information. Please provide us with the following
            information
          </p>

          <form className="popup-login-form" onSubmit={handleFormSubmit}>
            <div className="popup-reg-group">
              <input
                type="email"
                id="loginemail"
                className="form-input"
                placeholder="Email"
                name="email"
                required
                />
                <ErrorMessage name="email" component="div"/>
            </div>

            <div className="popup-reg-group">
              <input
                type="password"
                id="loginPassword"
                className="form-input"
                placeholder="Password"
                  name="password"                 
                />
                <ErrorMessage name="password" component="div" />
            </div>

            <button type="submit" className="popup-reg-btn">
              Log in
            </button>
          </form>
        </div>
        </div>
      </form>
    </Formik>
  );
};

export default LoginPopup;
