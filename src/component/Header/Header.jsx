import React from "react";
import propTypes from "prop-types";

import ukraineFlag from "../../assets/img/ukraine.svg"; 
import logInImage from "../../assets/img/log-in-01-f.svg"; 

import {
  ButtonLogin,
  ButtonRegister,
  Links,
  LinksPages,
  LinksTitlte,
  Span,
  Wrap,
  WrapButton,
  WrapLinksPage,
  WrapLogo,
  WrapLogoHome,
  WrapTeachersLogin,
} from "./Header.styled";
import { useAuth } from "../../Hooks/use-auth";
import { UserMenu } from "../UserMenu/UserMenu";
import { Navigate } from "react-router-dom";

export const Header = ({ setNamePopUp }) => {
  const { isLoggedIn } = useAuth();

  const handleLogin = () => {
    setNamePopUp("login");
    return <Navigate to="/login" />;
  };

  const handleSignIn = () => {
    setNamePopUp("signin");
    return <Navigate to="/login" />;
  };

  return (
    <Wrap>
      <WrapLogoHome>
        <WrapLogo>
          <Links to="/">
            <img src={ukraineFlag} alt="Ukraine Flag" /> {/* SVG як зображення */}
          </Links>
          <LinksTitlte to="/">LearnLingo</LinksTitlte>
        </WrapLogo>
      </WrapLogoHome>

      <WrapLinksPage>
        <LinksPages to="/">Home</LinksPages>
        <LinksPages to="teachers">Teachers</LinksPages>
        {isLoggedIn && <LinksPages to="favorites">Favorites</LinksPages>}
      </WrapLinksPage>
      <WrapTeachersLogin>
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <WrapButton>
            <ButtonLogin type="button" onClick={handleLogin}>
              <Span>
                <img src={logInImage} alt="Log In" /> {/* SVG як зображення */}
              </Span>
              Log in
            </ButtonLogin>

            <ButtonRegister type="button" onClick={() => handleSignIn()}>
              Registration
            </ButtonRegister>
          </WrapButton>
        )}
      </WrapTeachersLogin>
    </Wrap>
  );
};

Header.propTypes = {
  setNamePopUp: propTypes.func.isRequired,
};

export default Header;