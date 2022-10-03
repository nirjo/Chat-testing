import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Chat from "./Chat";
import {
  BASE_ROUTE,
 TWILIOCHAT_ROUTE ,

} from "./_main/routeConstants";

function App() {
  return (
    <Router>  
      <Routes>
        <Route path={BASE_ROUTE} element={<Login />} />
        <Route path={TWILIOCHAT_ROUTE} element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
