import { useForm } from './hooks/useForm';
import styles from './Login.module.css';


export const Login = ({data}) => {
  
   const { form, handleSubmit, handleChange }= useForm();
  
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

