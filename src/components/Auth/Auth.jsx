import React from 'react';
import { Link } from 'react-router-dom';


const Auth = ({ onRegistrationClick }) => {
  return (
    <div className="header-login">
      <nav className="header-login-user">
        <Link to="#" id="logInLink" className="svg-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
            <path stroke="#F4C550" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M12.5 2.5h1c1.4 0 2.1 0 2.635.272a2.5 2.5 0 0 1 1.092 1.093C17.5 4.4 17.5 5.1 17.5 6.5v7c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092c-.535.273-1.235.273-2.635.273h-1M8.333 5.833 12.5 10m0 0-4.167 4.167M12.5 10h-10" />
          </svg>
        </Link>
        <Link to="#" id="logInButton" className="svg-icon" onClick={onRegistrationClick}>
          Log in
        </Link>
      </nav>
      <div className="header-login-button">
        <button className="button" id="registrationButton" onClick={onRegistrationClick} >
          Registration
        </button>
      </div>
    </div>
  );
};

export default Auth;
