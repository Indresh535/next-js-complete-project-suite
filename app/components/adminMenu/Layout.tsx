'use client';
import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { useRouter } from 'next/navigation';
import { Container } from '@mui/material';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();

  // Check if the current path is the login page
  const isLoginPage = router.pathname === '/views';

  return (
    <div style={{ display: 'flex' }}>
      {!isLoginPage && <Sidebar />}
      <div style={{ flexGrow: 1 }}>
        {!isLoginPage && <Navbar />}
        <Container>
          {children}
        </Container>
      </div>
    </div>
  );
};

export default Layout;
