//libs
import React from "react";
import cx from "classnames";

//styles
import S from "./style.module.scss";

const CustomButton = ({
  title = "",
  type = "button",
  onClick = () => {},
  buttonClass = "",
}) => {
  return (
    <div className={S.buttonContainer}>
        <button type={type} className={cx(S.button, buttonClass)} onClick={onClick}>
          {title}
        </button>
    </div>
  );
};

export default React.memo(CustomButton);
