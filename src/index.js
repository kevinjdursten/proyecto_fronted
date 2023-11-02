import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";

//Componentes
import Layout from "./Components/Layout";
import { ProtectedRouter } from "./Components/ProtectedRouter";

// Vistas
import { Home } from "./Views/User/Home";
import { About } from "./Views/About";
import { Login } from "./Views/Login";
import { Register } from "./Views/Register";
import { Index } from "./Views/Index";

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Index />
              </Layout>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route element={<ProtectedRoutes />}>
            <Route
              path="/home"
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

function ProtectedRoutes() {
  return (
    <ProtectedRouter>
      <Outlet />
    </ProtectedRouter>
  );
}

root.render(<App />);
