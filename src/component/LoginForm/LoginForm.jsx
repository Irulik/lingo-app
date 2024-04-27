import React from "react";
import propTypes from "prop-types";
import { Formik, Form, ErrorMessage } from "formik";
import BaseModalWrap from "../WrapPopUp/WrapPopUp";
import {
  ButtonEye,
  ButtonSubmit,
  Discrp,
  ErrorMessageLogin,
  ErrorMessagePassword,
  Input,
  Title,
  WrapCloseBtn,
  WrapInput,
  WrapLogin,
} from "./LoginForm.styled";
import * as yup from "yup";
import { useState } from "react";
import eyeOn from "../../assets/img/EyeOn.svg";
import eyeOff from "../../assets/img/eye-off.svg";
import { useDispatch } from "react-redux";
import { logining } from "../../Redux/Auth/operations";

import CloseBtn from "../../assets/img/x.svg";

const initialValues = {
  email: "",
  password: "",
};
const userSchema = yup.object().shape({
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

export const LoginForm = ({ onClose }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (value, { resetForm }) => {
    dispatch(logining({ value }));
    resetForm();
    onClose();
  };


  const FormikErrorMessage = ({ name }) => {
    switch (name) {
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
            <Title>Log In</Title>
            <Discrp>
              Welcome back! Please enter your credentials to access your account
              and continue your search for an teacher.
            </Discrp>
            <WrapInput>
              <Input type="text" name="email" placeholder="Email" />
              <FormikErrorMessage name="email" />
              <Input
                type={isPasswordVisible ? "text" : "password"}
                name="password"
                placeholder="Password"
                marginbottom="40px"
              />
              <FormikErrorMessage name="password" />

              <ButtonSubmit type="submit">Log In</ButtonSubmit>

              <ButtonEye
                type="button"
                onClick={() => {
                  setIsPasswordVisible(!isPasswordVisible);
                }}
              >
                  {isPasswordVisible ? <img src={eyeOn} alt="Eye On" /> : <img src={eyeOff} alt="Eye Off" />}
              </ButtonEye>
            </WrapInput>
          </Form>
        </Formik>
      </WrapLogin>
    </BaseModalWrap>
  );
};

LoginForm.propTypes = {
  onClose: propTypes.func.isRequired,
  name: propTypes.string,
};

export default LoginForm;