import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Radio, Menu, X, Search, User, ChevronRight, Headphones } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Planes', path: '/planes' },
    { name: 'Galería', path: '/galeria' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contacto', path: '/contacto' },
  ];

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className="absolute top-0 left-0 w-full z-[100]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div 
          className="relative flex items-center justify-between px-6 py-3"
        >
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 md:gap-3 group relative z-[110] shrink">
            <motion.div 
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
              className="p-2 bg-neon-cyan rounded-lg md:rounded-xl shadow-[0_0_20px_rgba(0,243,255,0.3)] shrink-0"
            >
                <Radio className="text-royal-blue-dark w-5 h-5 md:w-5 md:h-5" />
            </motion.div>
            <div className="flex flex-col min-w-0">
              <span className="font-black text-base md:text-lg tracking-tighter uppercase leading-none text-white">
                RadiOlea<span className="text-neon-cyan italic">Controls</span>
              </span>
              <span className="hidden md:block text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase leading-none mt-1">
                Audio Intelligence
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-black uppercase tracking-widest transition-all hover:text-neon-cyan group ${
                  location.pathname === link.path ? 'text-neon-cyan' : 'text-gray-300'
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                {location.pathname === link.path && (
                  <motion.div 
                    layoutId="nav-glow"
                    className="absolute inset-0 bg-neon-cyan/5 rounded-lg border-b-2 border-neon-cyan/50"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-4 relative z-[110]">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-neon-cyan hover:border-neon-cyan/50 transition-all"
            >
              <Search className="w-5 h-5" />
            </button>

            <button 
              onClick={() => navigate('/login')}
              className="flex items-center gap-2 bg-neon-cyan text-royal-blue-dark px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] hover:scale-105 transition-all"
            >
              <User className="w-4 h-4" />
              Portal
            </button>
          </div>

          {/* Mobile Menu & Search Button */}
          <div className="lg:hidden flex items-center gap-1 md:gap-3 relative z-[110] shrink-0">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-300 hover:text-neon-cyan transition-colors"
            >
              <Search className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl transition-all ${isOpen ? 'bg-neon-cyan text-royal-blue-dark' : 'text-white bg-white/5 hover:bg-white/10'}`}
            >
              {isOpen ? <X className="w-5 h-5 md:w-6 md:h-6" /> : <Menu className="w-5 h-5 md:w-6 md:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-royal-blue-dark/95 backdrop-blur-xl z-[150] flex items-start justify-center pt-32 px-4"
          >
            <button 
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-10 right-10 text-gray-400 hover:text-white transition-all"
            >
              <X size={40} />
            </button>
            <div className="w-full max-w-3xl space-y-8">
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter text-center">
                ¿Qué estás <span className="text-neon-cyan italic">buscando?</span>
              </h2>
              <div className="relative">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-neon-cyan w-8 h-8" />
                <input 
                  autoFocus
                  type="text" 
                  placeholder="Escribe aquí tu búsqueda..."
                  className="w-full bg-white/5 border-2 border-white/10 rounded-3xl py-8 pl-20 pr-8 text-2xl text-white focus:outline-none focus:border-neon-cyan transition-all placeholder:text-gray-700"
                />
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="text-xs font-black uppercase text-gray-500 tracking-widest">Sugerencias:</span>
                {['Planes', 'Precios', 'Soporte', 'AMPROFON', 'Sucursales'].map(s => (
                  <button key={s} className="text-xs font-black uppercase text-neon-cyan hover:underline">{s}</button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Side Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-royal-blue-dark border-l border-white/10 z-[100] lg:hidden flex flex-col p-8 pt-24 shadow-[-20px_0_50px_rgba(0,0,0,0.5)]"
            >
              <div className="flex flex-col space-y-2">
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-4 ml-4">Navegación</p>
                {links.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={`flex items-center justify-between p-4 rounded-2xl text-xl font-black uppercase tracking-tighter transition-all ${
                        location.pathname === link.path 
                          ? 'bg-neon-cyan text-royal-blue-dark' 
                          : 'text-white hover:bg-white/5'
                      }`}
                    >
                      {link.name}
                      <ChevronRight size={20} className={location.pathname === link.path ? 'opacity-100' : 'opacity-20'} />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto space-y-4">
                <div className="p-6 bg-white/5 rounded-[32px] border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <Headphones className="text-neon-cyan" size={24} />
                    <p className="text-xs font-black uppercase tracking-widest text-white">Soporte 24/7</p>
                  </div>
                  <p className="text-[10px] text-gray-400 leading-relaxed uppercase font-bold">Línea directa para ingenieros en audio sucursal.</p>
                </div>
                
                <button 
                  onClick={() => navigate('/login')}
                  className="w-full bg-white text-royal-blue-dark py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-sm shadow-xl"
                >
                  Portal Clientes
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;