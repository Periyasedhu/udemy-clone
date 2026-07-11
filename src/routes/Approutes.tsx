import LoginPage from "../features/auth/pages/Login";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignupPage from "../features/auth/pages/Signup";
import MainLayout from "../layouts/Mainlayout/Mainlayout";
import { Home } from "../features/home/pages/Home";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />} path="/">
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
