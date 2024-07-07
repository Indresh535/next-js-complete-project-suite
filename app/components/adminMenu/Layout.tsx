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

    const isNoNavBarRoute = noNavBarRoutes.includes(router.pathname);

    return (
        <div>
            {router.pathname === '/' ? ( 
              <LogIn />
            ) : (              
            <NavBar >
            {children}
            </NavBar>
            )
              }
        </div>
    );
};

export default Layout;
