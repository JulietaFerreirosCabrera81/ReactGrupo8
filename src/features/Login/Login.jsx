import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import styles from './Login.module.css';

export const Login = ({data}) => {
  
    const navigate = useNavigate();

    const { login, isAuth }= useContext(AuthContext);
  

    const [ form, setForm ] = useState({
      email: "",
      password:"",
      });

    const handleSubmit = (e) => {
        e.preventDefault();

        const { email, password } = form;

        login({
            email,
            password,
        });

        navigate("/", {
            replace: true
        });
    };

        const handleChange = (e) => {
            const { name, value } = e.target;
            setForm({
                ...form,
                [name]: value,
            });
        };
  
    return (
    <div className={styles["fondo"]}>
        <div className={styles["container"]}>
        <h2> Iniciar Sesion </h2>    
        <form onSubmit={handleSubmit}>
            <input 
                className={styles["input"]}
                placeholder="email"
                type="text"
                value={form.email}
                onChange={handleChange}
                name="email"
                
            />
            <input
                className={styles["input"]}
                placeholder="contraseña"
                type="password"
                value={form.password}
                onChange={handleChange}
                name="password"
            />
            <button 
                type={styles["button"]}
                > Iniciar Sesion </button>
        </form>
        </div>
    </div>
  );
};

