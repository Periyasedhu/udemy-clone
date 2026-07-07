import {Login as LoginPage} from "../features/auth/pages/Login";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";
import { Signup as SignupPage } from "../features/auth/pages/Signup";

function AppRoutes() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/signup" element={<SignupPage/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;   