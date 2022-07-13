//libs
import React, { useState } from "react";

//styles
import S from "./login.module.scss";

//constants
import { STRINGS, WARNINGS } from "src/shared/constants";

//components
import { Form, Formik } from "formik";
import { CustomButton, CustomInput } from "src/components";

export const LoginForm = ({ onSubmit=()=>{}, loginFailed="" }) => {
const errorCheck = typeof loginFailed === "string" ? loginFailed : "";
  const [showPassword, setShowPassword] = useState(false);

  const INPUT_FILEDS = [
    { name: STRINGS.USERNAME, label: STRINGS.USERNAME },
    {
      name: STRINGS.PASSWORD,
      label: STRINGS.PASSWORD,
      type: showPassword ? "text" : "password",
      passwordIcon: showPassword ? "eye" : "eye-blocked",
    },
  ];

  const inputRefs = Array(INPUT_FILEDS.length).fill(React.createRef());

  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <section className={S.formSection}>
      <div className={S.headingSection}>
      <label className={S.title}>
            {STRINGS.SIGNIN}
      </label>
      </div>
      <div className={S.formContainer}>
      <div className={S.formSubContainer}>
      <Formik
        validate={validate}
        initialValues={{
          Username: "",
          Password: "",
        }}
        onSubmit={onSubmit}
      >
        {({
          handleChange,
          handleSubmit,
          handleBlur,
          errors,
          touched,
          values,
        }) => (
          <Form onSubmit={handleSubmit}>
            {INPUT_FILEDS.map((field, idx) => (
              <CustomInput
                key={idx}
                id={"login__"+idx}
                label={field.label}
                inputRef={(r) => (inputRefs[idx] = r)}
                name={field.name}
                errors={errorCheck?{Username:"", Password:WARNINGS.INVALID_USERNAME_PASSWORD}:errors}
                touched={touched}
                handleChange={handleChange}
                containerClass={S.loginInputContainer}
                labelClass={S.loginLabel}
                inputClass={S.loginInput}
                value={values[field.name]}
                type={field.type}
                handleBlur={handleBlur}
                showPasswordIcon={field.passwordIcon}
                toggleShowPassword={handleShowPassword}
                placeholder={field.label}
              />
            ))}
            <CustomButton
              type="submit"
              title={STRINGS.SIGNIN}
              onClick={handleSubmit}
            />
          </Form>
        )}
      </Formik>
      </div>
      </div>
    </section>
  );
};

const validate = (values) => {
  const errors = {};
  if (!values.Password) {
    errors.Password = "Required";
  }
  if (!values.Username) {
    errors.Username = "Required";
  }
  return errors;
};
