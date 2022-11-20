import { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import logo from "../../assets/imagenes/logo.png"
import styles from './NavBar.module.css';
import {  Link, NavLink, useNavigate } from 'react-router-dom';

export const NavBar = () => {
  
    const { logout }= useContext(AuthContext);
    
    const navigate = useNavigate();


return (
        <div className={styles ["container"]}>
            <img src={ logo }/>
            <ul className="">
                <NavLink className={styles ["link"]} to="/home"> Inicio </NavLink>
                <NavLink className={styles ["link"]} to="/series"> Series </NavLink> 
                <NavLink className={styles ["link"]} to="/movies"> Peliculas </NavLink>
                <NavLink className={styles ["link"]} to="/novedades"> Novedades </NavLink>                 
            </ul>
            
            <button
                onClick={logout}>
                sing out
            </button> 
            </div>
            
        )
}


