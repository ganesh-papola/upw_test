//libs
import React from "react";
import { useSelector } from "react-redux";
//routes
import PublicRoutes from "./PublicRoutes";
import PrivateRoute from "./PrivateRoutes";


const Routes = () => {
  const authToken = useSelector(state=>state?.auth)?.accessToken;
  return authToken ? <PrivateRoute /> : <PublicRoutes/>;
};

export default Routes;
