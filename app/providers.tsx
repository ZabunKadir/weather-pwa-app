"use client";
import { ThemeProvider } from "next-themes";
import React, { useEffect } from "react";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider enableSystem={false} attribute="class">
      {children}
    </ThemeProvider>
  );
};

export default Providers;
