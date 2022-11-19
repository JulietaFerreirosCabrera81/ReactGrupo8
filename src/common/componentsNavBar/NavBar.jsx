import { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { NavBarContainer } from './styles/NavBarContainer';

export const NavBar = () => {
  
    const { logout }= useContext(AuthContext);
  

    return (
        <NavBarContainer>
            <div style={{
                    disply:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    color: "red",
                    margin: "10px",
                    fontSize: "20px"
            }}>
               
            </div>
            <button
                onClick={logout}
            >
                sing out
            </button>
        </NavBarContainer>
    )
}


