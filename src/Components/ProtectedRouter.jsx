import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";

export const ProtectedRouter = ({ children }) => {
    const [role] = useState(localStorage.getItem("role")) || null;
    const [token] = useState(localStorage.getItem("token")) || null;

    const roles = {
        user: [
            /^\/home$/,
            /^\/administracion$/
        ],
        admin: [
            /^\/producto$/,
            /^\/crear$/,
            /^\/pago$/,
            /^\/admin$/
        ]
    }

    const location = useLocation();
    const path = location.pathname;

    if (!token) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    if (role) {
        if (role && !roles[role].some(route => route.test(path))) {
            const redirectTo = {
                user: "/home",
                admin: "/producto"
            }[role];
            console.log(redirectTo[role])
            return <Navigate to={redirectTo} state={{ from: location }} replace />
        }
    }
    return (
        <>
            {children ? children : <Outlet />}
        </>
    )

}
