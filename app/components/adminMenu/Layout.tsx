"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import NavBar from '../navbar/Navbar';
import LogIn from '@/app/page';

type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const router = useRouter();
    const noNavBarRoutes = '/'; // Add more routes if needed
    console.log("noNavBarRoutes", noNavBarRoutes)

    const isNotLoggedIn = router.pathname == '/' || router.pathname == '';

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
