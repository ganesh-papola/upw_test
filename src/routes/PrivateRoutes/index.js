//libs
import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";

//components
import { Header } from "src/components";

//constants
import { routes } from "src/shared/constants";

//Views
import {
  Dashboard,
} from "src/views/Private";

const PrivateRoute = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={routes.Dashboard} element={<Dashboard />} />
        <Route path="*" element={<Navigate to={routes.Dashboard} replace />} />
      </Routes>
    </Router>
  );
};

export default PrivateRoute;
