//libs
import React from "react";

//helper
import cx from "classnames";

//styles
import S from "./style.module.scss";

const CustomInput = ({
  id = "",
  label = "",
  inputRef,
  name = "",
  errors = {},
  touched = {},
  handleChange = () => { },
  containerClass = "",
  inputClass = "",
  labelClass = "",
  placeholder = "",
  type = "text",
  value = "",
  min = 10,
  max = 100,
  ...props
}) => {
  const handleInputChange = (e) => {
    if (props.maxLength && e.target.value?.length > props.maxLength) return;
    handleChange(e);
  };

  return (
    <div className={cx(S.inputContainer, containerClass)}>
      <div className={S.formGroup}>
        <input className={S.formField}
          id={id}
          name={name}
          ref={inputRef}
          onChange={handleInputChange}
          placeholder={placeholder}
          value={value}
          type={type}
          min={min}
          max={max}
        />
      </div>
      <div className={S.inputContainerLabelDiv}>
        <span className={S.inputContainerError}>
          {errors[name] && touched[name] ? errors[name] : ""}
        </span>
      </div>
    </div>
  );
};

export default React.memo(CustomInput);
