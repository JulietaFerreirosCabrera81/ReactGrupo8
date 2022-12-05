import React from 'react';
import { AuthProvider } from './auth/AuthProvider';
import { AuthProviderData } from './auth/AuthProviderData';
import { AppRoutes } from './routes/App.routes';

export const App = ()=> {
 
  return (
    <AuthProvider>
           <AuthProviderData>
               <AppRoutes/>
           </AuthProviderData>       
    </AuthProvider>
  );
};


