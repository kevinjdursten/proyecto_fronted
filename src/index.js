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
import { AdministracionUser } from "./Views/User/AdministracionUser";
import { Admin } from "./Views/Admin/Admin";
import { Pagos } from "./Views/Admin/Pagos";
import { Productos } from "./Views/Admin/Productos";

// Vistas del CRUD
import { CrearProducto } from "./Views/Admin/crear/CrearProducto";

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
            <Route
              path="/administracion"
              element={
                <Layout>
                  <AdministracionUser />
                </Layout>
              }
            />
            <Route
              path="/producto"
              element={
                <Layout>
                  <Productos />
                </Layout>
              }
            />
            <Route
              path="/crear"
              element={
                <Layout>
                  <CrearProducto />
                </Layout>
              }
            />
            <Route
              path="/pago"
              element={
                <Layout>
                  <Pagos />
                </Layout>
              }
            />
            <Route
              path="/admin"
              element={
                <Layout>
                  <Admin />
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
