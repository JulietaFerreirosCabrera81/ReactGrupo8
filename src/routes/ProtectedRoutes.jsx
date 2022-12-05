import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';


export const ProtectedRoutes = ({children}) => {
  
    const { isAuth } = useContext(AuthContext);
 
return ( isAuth )
      ? children
      : <Navigate to="/login"/>

};
