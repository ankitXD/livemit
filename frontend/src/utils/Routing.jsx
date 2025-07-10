import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login.jsx";
import Home from "../pages/Home.jsx";
import Features from "../pages/Features.jsx";
import Pricing from "../pages/Pricing.jsx";
import Blog from "../pages/Blog.jsx";
import SignUp from "../pages/SignUp.jsx";
import Terms from "../pages/Terms.jsx";
import Privacy from "../pages/Privacy.jsx";
import ForgotPassword from "../pages/ForgotPassword.jsx";
import Profile from "../pages/Profile.jsx";
import UpdateProfile from "../pages/UpdateProfile.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import PrivateRoute from "./PrivateRoute.jsx";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<Features />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
      <Route
        path="/update-profile"
        element={<PrivateRoute element={<UpdateProfile />} />}
      />
      <Route
        path="/dashboard"
        element={<PrivateRoute element={<Dashboard />} />}
      />
    </Routes>
  );
}

export default Routing;
