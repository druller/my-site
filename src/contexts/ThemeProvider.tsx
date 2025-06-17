"use client"

// Node Modules
import React, { useState, useEffect } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <NextThemesProvider {...props}>
      <>
        {/* Custom Cursor */}
        <div id="customCursor" style={{top: mousePosition.y + 'px', left: mousePosition.x + 'px'}} className="custom-cursor"></div>
        {children}
      </>
    </NextThemesProvider>
  )
}
