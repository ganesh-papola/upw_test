//libs
import React from "react";

//component
import Loader from "react-loader-spinner";

//styles
import S from "./LoaderHoc.module.scss";

const LoaderHOC = ({ children, loading }) => {
  return (
    <>
      {children}
      {!!loading && (
        <div className={S.container}>
          <div className={S.loader}>
            <Loader type="Circles" color="#04aa6d" height={80} width={80} />
          </div>
        </div>
      )}
    </>
  );
};

export default LoaderHOC;
