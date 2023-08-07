"use client";
import { ThemeProvider } from "next-themes";
import React from "react";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  document.documentElement.getAttribute("data-theme");

  return (
    <ThemeProvider enableSystem={false} attribute="class">
      {children}
    </ThemeProvider>
  );
};

export default Providers;
