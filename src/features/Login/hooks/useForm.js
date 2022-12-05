import { useContext, useState } from "react";
import { AuthContext } from "../../../auth/AuthContext";
import { useNavigate } from 'react-router-dom';


export const useForm= ()=>{

    const navigate = useNavigate();
    const { login, isAuth }= useContext(AuthContext);

    const [ form, setForm ] = useState({
        email: "",
        password:"",
        });

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = form;
        if( !email || !password ){
            return alert("Completar todos los campos")
        }
        
        login({
            email,
            password,
        });

        (navigate("/", {
             replace: true
        }))
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    }
    
    return {
        form,
        setForm,
        handleChange,
        handleSubmit,
    }
};