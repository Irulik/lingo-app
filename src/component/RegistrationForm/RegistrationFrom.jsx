import React from "react";
import propTypes from "prop-types";
import { Formik, Form, ErrorMessage } from "formik";
import BaseModalWrap from "../WrapPopUp/WrapPopUp";
import {
  ButtonEye,
  ButtonSubmit,
  Discrp,
  ErrorMessageLogin,
  ErrorMessageName,
  ErrorMessagePassword,
  Input,
  Title,
  WrapCloseBtn,
  WrapInput,
  WrapLogin,
} from "./RegistrationForm.styled";
import * as yup from "yup";
import { useState } from "react";
import eyeOff from "../../assets/img/eye-off.svg";
import eyeOn from "../../assets/img/EyeOn.svg";
import { useDispatch } from "react-redux";
import { register } from "../../Redux/Auth/operations";

import CloseBtn from "../../assets/img/x.svg";

const initialValues = {
  name: "",
  email: "",
  password: "",
};
const userSchema = yup.object().shape({
  name: yup.string().required("Be sure to enter your name"),
  email: yup
    .string()
    .matches(
      /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,
      "Incorret email"
    )
    .required("Be sure to enter your email"),
  password: yup
    .string()
    .min(8, "Password must contain minimum 8 symbols")
    .max(64, "Password must contain maximum 64 symbols")
    .required("Be sure to enter your password"),
});

export const SignInForm = ({ onClose }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (value) => {
    dispatch(register({ value }));
    onClose();
  };

  const FormikErrorMessage = ({ name }) => {
    switch (name) {
      case "name":
        return <ErrorMessage name={name} component={ErrorMessageName} />;
      case "email":
        return <ErrorMessage name={name} component={ErrorMessageLogin} />;
      case "password":
        return <ErrorMessage name={name} component={ErrorMessagePassword} />;
      default:
    }
  };

  return (
    <BaseModalWrap onClose={onClose}>
      <WrapLogin>
        <Formik
          initialValues={initialValues}
          validationSchema={userSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <WrapCloseBtn onClick={onClose}>
              <img src={CloseBtn} alt="Close" />
            </WrapCloseBtn>
            <Title>Registration</Title>
            <Discrp>
              Thank you for your interest in our platform! In order to register
              <wbr />, we need some information. Please provide us with the
              following information
            </Discrp>
            <WrapInput>
              <Input type="text" name="name" placeholder="Name" />
              <FormikErrorMessage name="name" />
              <Input type="text" name="email" placeholder="Email" />
              <FormikErrorMessage name="email" />
              <Input
                type={isPasswordVisible ? "text" : "password"}
                name="password"
                placeholder="Password"
              />
              <FormikErrorMessage name="password" />

              <ButtonEye
                type="button"
                onClick={() => {
                  setIsPasswordVisible(!isPasswordVisible);
                }}
              >
                {isPasswordVisible ? <EyeOn /> : <img src={eyeOff} alt="Eye Off" />}
              </ButtonEye>
            </WrapInput>
            <ButtonSubmit type="submit">Sign Up</ButtonSubmit>
          </Form>
        </Formik>
      </WrapLogin>
    </BaseModalWrap>
  );
};

SignInForm.propTypes = {
  onClose: propTypes.func.isRequired,
  name: propTypes.string,
};

export default SignInForm;