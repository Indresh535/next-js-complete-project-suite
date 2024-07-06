import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next-js Project setup",
  description: "Complete setup for nexts-js project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider 
          // options={{ key: 'css' }}
          >
          {children}
        </AppRouterCacheProvider>
        </body>
    </html>
  );
}
