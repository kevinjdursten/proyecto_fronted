import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Vistas
import Home from "./Views/Home";
import About from "./Views/About";
import Login from "./Views/Login";
import Register from "./Views/Register";
import Index from "./Views/Index";

const root = ReactDOM.createRoot(document.getElementById("root"));
const token = localStorage.getItem("token");
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home />
          }
        />
        <Route
          path="/about"
          element={
            <About />
          }
        />
        <Route
          path="/login"
          element={
            <Login />
          }
        />
        <Route
          path="/register"
          element={
            <Register />
          }
        />
        {token && (
          <>
            <Route path="/home" element={<Index />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
