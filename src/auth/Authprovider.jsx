import React, { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { actionTypes } from './reducer/actionTypes';
import { authReducer } from './reducer/authReducer';


const initAuthReducer = ()=> {
    const user = JSON.parse(localStorage.getItem("user"));
    return{
        isAuth:!!user,
        user: user,
    };
};

export const AuthProvider = ({children}) => {
  
    const [state, dispatch] = useReducer(authReducer, {},initAuthReducer);
    
    
    const { isAuth, user } =  state;

    const login = (usuario) => {
        
        dispatch({
            type: actionTypes.LOGIN,
            payload: usuario,
          });

        localStorage.setItem("user", JSON.stringify({
            isAuth: true,
            user: usuario,
        }));  
    };
    
    const logout =()=> {
        localStorage.removeItem('user');
        dispatch({
            type:actionTypes.LOGOUT,
        })

        localStorage.clear();
    };

    return (
        <AuthContext.Provider value={{
            user,
            isAuth, 
            login,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
  )
};


