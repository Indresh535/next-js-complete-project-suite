'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material';
// If you want to use CSS theme variables, use the extendTheme and CssVarsProvider utilities instead:
// import { extendTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
