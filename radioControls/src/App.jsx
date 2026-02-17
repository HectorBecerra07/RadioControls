import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Companies from './pages/Companies';
import Footer from './components/Footer';

// Componente para envolver las rutas y permitir animaciones
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Home />
            </motion.div>
          } 
        />
        <Route 
          path="/companies" 
          element={
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Companies />
            </motion.div>
          } 
        />
        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="bg-black text-white min-h-screen font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden">
        
        {/* Navigation */}
        <Navbar />

        {/* Content */}
        <main className="relative z-10">
          <AnimatedRoutes />
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;