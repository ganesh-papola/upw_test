//libs
import React from "react";

//styles
import S from "./login.module.scss";

//hooks
import { useNavigate } from "react-router-dom";

//constants
import { STRINGS, FORGOT_PASSWORD, routes } from "src/shared/constants";

//form
import { LoginForm } from "src/views/Public/Login/LoginForm";


const Login = ({ signIn=()=>{}, loginFailed={} }) => {

  const navigate = useNavigate();
  const handleSubmit = (values) => {
    signIn({
      payload: { ...values },
      success: (msg) => {
        navigate(routes.Dashboard);
      },
      fail: (msg) => {},
    });
  };

  return <section className={S.login}><LoginForm onSubmit={handleSubmit} loginFailed={loginFailed} /></section>;
};

export default (Login);
