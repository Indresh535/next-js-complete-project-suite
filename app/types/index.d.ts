// src/index.d.ts

declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "*.jpeg" {
  const content: string;
  export default content;
}

declare module "*.gif" {
  const content: string;
  export default content;
}

declare module "*.svg" {
  import React from "react";
  const content: React.FC<React.SVGProps<SVGSVGElement>>;
  export default content;
}

// Define global types and interfaces here

// Example: Theme interface for MUI Theme
interface CustomTheme {
  palette: {
    primary: {
      main: string;
    };
    secondary: {
      main: string;
    };
  };
}

declare module '@mui/material/styles' {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}
