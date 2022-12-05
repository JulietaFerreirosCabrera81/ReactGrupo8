import React from 'react';
import { Footer } from '../componentsFooter/Footer';
import { NavBar } from '../componentsNavBar/NavBar';

export const HomeLayout = ({children}) => {
    return (
        <div>
            <NavBar/>
                {children}
            <Footer />
        </div>
    )
};


