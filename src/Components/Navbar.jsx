import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
function Navbar() {

    const [role] = useState(localStorage.getItem("role")) || null;
    console.log("Valor del role:", role)

    // const links = [
    //     { id: 0, to: "/", label: 'Inicio' },
    //     { id: 1, to: "/about", label: 'About' },
    //     { id: 2, to: "/login", label: 'Login' },
    //     { id: 3, to: "/register", label: 'Register' }
    // ]

    const linksUser = [
        { id: 0, to: "/home", label: "Home" },
        { id: 1, to: "/administracion", label: "Administracion" }
    ]

    const linksAdmin = [
        { id: 0, to: "/producto", label: "Productos" },
        { id: 1, to: "/pago", label: "Pagos" },
        { id: 2, to: "/admin", label: "Administracion" }
    ]

    const handleLogout = async () => {
        try {
            localStorage.removeItem("token");
            localStorage.removeItem("role");
            localStorage.removeItem("userID");
            window.location.href = '/';
            await axios.post("http://localhost:3002/user/logout");
        } catch (error) {
            console.log(error);
        }
    }

    if (!role) {
        return (
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
            </nav>
        )
    }
    return (
        <nav>
            <ul>
                {role === "user" && linksUser.map(link => (
                    <li key={link.id}>
                        <Link to={link.to}>{link.label}</Link>
                    </li>
                ))}
                {role === "admin" && linksAdmin.map(link => (
                    <li key={link.id}>
                        <Link to={link.to}>{link.label}</Link>
                    </li>
                ))}
            </ul>
            <button onClick={handleLogout}>Logout</button>
        </nav>
    );
}

export default Navbar;