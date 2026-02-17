import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Radio, Menu, X, Search, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  const links = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Planes', path: '/planes' },
    { name: 'Galería', path: '/galeria' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-royal-blue-dark/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-neon-cyan rounded-xl group-hover:rotate-12 transition-transform duration-300">
                <Radio className="text-royal-blue-dark w-6 h-6" />
            </div>
            <span className="font-black text-xl tracking-tighter uppercase text-white">
              RadiOlea<span className="text-neon-cyan">Controls</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-bold text-gray-300 hover:text-neon-cyan transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            <div className="h-6 w-px bg-white/10 mx-2" />

            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-300 hover:text-neon-cyan transition-colors p-2"
            >
              <Search className="w-5 h-5" />
            </button>

            <button 
              onClick={() => navigate('/login')}
              className="flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-neon-cyan hover:text-royal-blue-dark transition-all"
            >
              <User className="w-4 h-4" />
              PORTAL CLIENTES
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="text-gray-300 p-2"><Search className="w-5 h-5" /></button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 p-2">{isOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-royal-blue-dark border-b border-white/10 p-4 z-40"
          >
            <div className="max-w-3xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input 
                autoFocus
                type="text" 
                placeholder="Busca servicios, dudas sobre licencias o ayuda técnica..."
                className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-neon-cyan transition-all"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="lg:hidden fixed inset-0 top-20 bg-royal-blue-dark z-50 p-6"
          >
            <div className="flex flex-col space-y-6">
              {links.map((link) => (
                <Link key={link.name} to={link.path} onClick={() => setIsOpen(false)} className="text-2xl font-black text-white">{link.name}</Link>
              ))}
              <button 
                onClick={() => { navigate('/login'); setIsOpen(false); }}
                className="w-full bg-neon-cyan text-royal-blue-dark py-4 rounded-2xl font-black"
              >
                PORTAL CLIENTES
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
