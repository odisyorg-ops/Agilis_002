import React from 'react';
import { ReactLenis } from 'lenis/react';
import { Outlet } from 'react-router-dom';
import Navbar from './GlobalComponent/Navbar';

function App() {
  const lenisOptions = {
    lerp: 0.1,
    duration: 1.5,
    smoothTouch: true, // Recommended for better mobile UX
    wheelMultiplier: 1,
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {/* Background color matches your Apple-style preference */}
      <div className="bg-[#fbfbfd] min-h-screen flex flex-col">
        
        {/* Navbar stays fixed at the top across all pages */}
        <Navbar />

        {/* This renders whatever route the user is on (Home, About, etc.) */}
        <main className="flex-grow">
          <Outlet />
        </main>

        {/* Global Footer */}
      </div>
    </ReactLenis>
  );
}

export default App;