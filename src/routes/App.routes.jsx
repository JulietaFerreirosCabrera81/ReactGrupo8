import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { NovedadesLink } from "../common/componentsNavBar/components/NovedadesLink";
import { PeliculasLink } from "../common/componentsNavBar/components/PeliculasLink";
import { SeriesLink } from "../common/componentsNavBar/components/SeriesLink";
import { Home } from "../features/Home/Home";
import { Login } from "../features/Login/Login";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { PublicRoute } from "./PublicRoute";


export const AppRoutes = () => {
return (
    <BrowserRouter>
        <Routes>
            <Route path="/login/*" element={
                    <PublicRoute>
                        <Routes>
                            <Route path="/*" element={<Login/>}/>  
                        </Routes>
                    </PublicRoute>
                }/>
           
            <Route path="/*" element={
                    <ProtectedRoutes>
                        <Routes>
                            
                            <Route path="home" element={<Home/>} />
                            <Route path="movies" element={<PeliculasLink/>}/>
                            <Route path="series" element={<SeriesLink/>}/>
                            <Route path="novedades" element={<NovedadesLink/>}/>  
                            <Route path="/" element={<Navigate to="/home"/>} />                         
                        </Routes>
                    </ProtectedRoutes>
                }
            />
           
        </Routes>
    </BrowserRouter>
   );
 };

