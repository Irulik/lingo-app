import React from 'react'
import './Header.css'
import HeaderNav from '../headerNav/HeaderNav';
import HeaderLogo from '../headerLogo/HeaderLogo';
import Auth from '../Auth/Auth';



const Header = () => {

  const handleRegistrationClick = () => {
      console.log('Registration button clicked');
  };
  
   return (
    <header className="header">
      <div className="container">
        <div className="header-row">
          <HeaderLogo />
          <HeaderNav />
          <Auth onRegistrationClick={handleRegistrationClick} />
        </div>
      </div>
    </header>
  );
};

export default Header;
