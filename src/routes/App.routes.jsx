import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { NovedadesLink } from "../features/linkNovedades/NovedadesLink";
import { HomeLayout } from "../common/layouts/HomeLayout";
import { Home } from "../features/Home/Home";
import { Login } from "../features/Login/Login";
import { Movie } from "../features/movies/pages/Movie";
import { Movies } from "../features/movies/pages/Movies";
import { Series } from "../features/series/pages/Series";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { PublicRoute } from "./PublicRoute";


export const AppRoutes = () => {
return (
    <BrowserRouter>
        <Routes>
            <Route path="/login/*" element={
                    <PublicRoute>
                        <Routes>
                            <Route path="/" element={<Login/>}/>  
                        </Routes>
                    </PublicRoute>
                }/>
           
            <Route path="/*" element={
                    <ProtectedRoutes>
                        <HomeLayout>  
                            <Routes>
                                <Route path="/" element={<Navigate to="/home"/>} />   
                                <Route path="home" element={ <Home/> } />
                                <Route path="movies" element={<Movies/>}/>
                                <Route path="series" element={<Series/>}/>
                                <Route path="novedades" element={<NovedadesLink/>}/> 
                                <Route path="home/movie/:id" element={<Movie />} />
                                <Route path="movies/movie/:id" element={<Movie />} />
                                <Route path="series/movie/:id" element={<Movie />} />
                                <Route path="novedades/movie/:id" element={<Movie />} />
                            </Routes>
                        </HomeLayout>
                    </ProtectedRoutes>
                }
            />
           
        </Routes>
    </BrowserRouter>
   );
 };

