import React, { useContext, useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { actionTypes } from './reducer/actionTypes'
import { authReducer, initialState } from './reducer/authReducer'



const initAuthReducer = ()=> {
    return JSON.parse(localStorage.getItem("user")) || initialState;
}

export const AuthProvider = ({children}) => {
  
    const [state, dispatch] = useReducer(authReducer, {},initAuthReducer);
    console.log(state);
    
    const { isAuth, user } =  state;

    const login = (usuario) => {
        
        dispatch({
            type: actionTypes.LOGIN,
            payload: usuario,
          });

        localStorage.getItem("user", JSON.stringify({
            isAuth: true,
            user: usuario,
        }));  
    };
    
    const logout =()=> {

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


