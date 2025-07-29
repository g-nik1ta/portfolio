import AdminPanel from "pages/AdminPanel/AdminPanel";
import Home from "pages/Home/Home";
import Login from "pages/Login/Login";
import React from "react";
import { Navigate } from "react-router-dom";

export const publicRoutes = [
    { path: '*', element: <Navigate to="/" />, exact: false, name: 'redirect' },
    { path: '/', element: <Home />, exact: false, name: 'home' },
    { path: '/login', element: <Login />, exact: false, name: 'login' },
]

export const privateRoutes = [
    { path: '/admin-panel', element: <AdminPanel />, exact: false, name: 'home' },
]