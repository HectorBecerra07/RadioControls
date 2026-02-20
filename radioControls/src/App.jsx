import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import { AppProviders } from './components/AppProviders';
import Footer from './components/Footer';

// Lazy load pages for better performance
const LandingPage = lazy(() => import('./pages/LandingPage'));
const Services = lazy(() => import('./pages/Services'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Gallery = lazy(() => import('./pages/Gallery'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Contact = lazy(() => import('./pages/Contact'));
const Checkout = lazy(() => import('./pages/Checkout'));
const ClientPortal = lazy(() => import('./pages/ClientPortal'));
const Admin = lazy(() => import('./pages/Admin'));
const BranchPlayer = lazy(() => import('./pages/BranchPlayer'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen bg-slate-950 flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-neon-cyan/20 border-t-neon-cyan rounded-full animate-spin"></div>
  </div>
);

const MainLayout = () => {
  const location = useLocation();
  const isPlayer = location.pathname.startsWith('/player/');
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';
  const isDashboard = location.pathname === '/dashboard';

  return (
    <div className="flex flex-col min-h-screen">
      {(!isPlayer && !isAuthPage && !isDashboard) && <Navbar />}
      
      <main className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/planes" element={<Pricing />} />
            <Route path="/galeria" element={<Gallery />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/checkout/:planId" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<ClientPortal />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/player/:branchSlug" element={<BranchPlayer />} />
            <Route path="*" element={<LandingPage />} />
          </Routes>
        </Suspense>
      </main>

      {(!isPlayer && !isAuthPage && !isDashboard) && <Footer />}
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppProviders>
        <div className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text min-h-screen">
          <MainLayout />
        </div>
      </AppProviders>
    </BrowserRouter>
  );
}

export default App;