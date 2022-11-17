import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { Movies } from '../movies/pages/Movies';
import { Series } from '../series/pages/Series';


export const Home = () => {
  
  const { user, logout }= useContext(AuthContext);
  
  return (
    <div>
       <Movies/>
       <Series/>
    </div>
  )
}
