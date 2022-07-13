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
  Login,
} from "src/views/Public";

const PublicRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path={routes.Login} element={<Login />} />
        <Route path="*" element={<Navigate to={routes.Login} replace />} />
      </Routes>
    </Router>
  );
};

export default PublicRoutes;
