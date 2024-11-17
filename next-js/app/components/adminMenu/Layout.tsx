"use client"
import React from 'react';
import { usePathname } from 'next/navigation'
import NavBar from '../navbar/Navbar';

type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const pathname = usePathname()    

    const isNotLoggedIn = pathname == '/' || pathname == '';

    return (
        <div>

{isNotLoggedIn && (
  <div>
                {children}  
    </div>
          )}

            {!isNotLoggedIn && ( 
             
            <NavBar >
            {children}
            </NavBar>
            ) }   
        </div>
    );
};

export default Layout;
