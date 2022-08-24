import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Forgot from "./Forgot";
import {
  BASE_ROUTE,
  REGISTER_ROUTE,
  FORGOT_ROUTE,
} from "./_main/routeConstants";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={BASE_ROUTE} element={<Login />} />
        <Route path={REGISTER_ROUTE} element={<Register />} />
        <Route path={FORGOT_ROUTE} element={<Forgot />} />
      </Routes>
    </Router>
  );
}

export default App;
