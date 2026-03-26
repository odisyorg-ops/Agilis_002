import React from 'react';
import { ReactLenis } from 'lenis/react';
import { Outlet } from 'react-router-dom';
import Navbar from './GlobalComponent/Navbar';
import Footer from './Components/Home/Footer';
import ScrollToTop from './GlobalComponent/ScrollToTop';


function App() {
  const lenisOptions = {
    lerp: 0.1,
    duration: 1.5,
    smoothTouch: true,
    wheelMultiplier: 1,
  };

  return (
    <ReactLenis root options={lenisOptions}>
      <div className="bg-[#fbfbfd] min-h-screen flex flex-col">
        {/* This component handles the scroll reset logic */}
        <ScrollToTop /> 
        
        <Navbar />

        <main className="flex-grow">
          <Outlet />
        </main>
        
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;