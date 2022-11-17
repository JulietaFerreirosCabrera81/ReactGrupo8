import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../features/Home/Home";
import { Login } from "../features/Login/Login";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { PublicRoute } from "./PublicRoute";


export const AppRoutes = () => {
return (
    <BrowserRouter>
        <Routes>
            <Route
                path="*"
                element={
                    <ProtectedRoutes>
                        <Routes>
                            <Route path="/" element={<Home/>} />
                        </Routes>
                    </ProtectedRoutes>
                }
            />

            <Route
                path="/login"
                element={
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                }
             />
        </Routes>
    </BrowserRouter>
   );
 };

