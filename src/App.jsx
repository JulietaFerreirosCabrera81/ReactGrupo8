import React from 'react';
import { AuthProvider } from './auth/AuthProvider';
import { AppRoutes } from './routes/App.routes';

export const App = ()=> {
 
  return (
    <AuthProvider>
        <AppRoutes/>  
    </AuthProvider>
  );
};


