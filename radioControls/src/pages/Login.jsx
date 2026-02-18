import React from 'react';
import { motion } from 'framer-motion';
import { Radio, ArrowRight, Lock, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-royal-blue-dark flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-black/40 backdrop-blur-2xl border border-white/10 p-12 rounded-[48px] shadow-2xl"
      >
        <div className="flex flex-col items-center mb-12">
          <div className="p-4 bg-neon-cyan rounded-2xl mb-6">
            <Radio className="w-10 h-10 text-royal-blue-dark" />
          </div>
          <h1 className="text-3xl font-black text-white uppercase tracking-tighter">Portal Clientes</h1>
          <p className="text-gray-500 font-bold text-sm mt-2">INGRESA A TU PANEL DE CONTROL</p>
        </div>

        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); navigate('/dashboard'); }}>
          <div className="space-y-2">
            <label className="text-xs font-black uppercase text-gray-400 ml-4">Correo Electrónico</label>
            <div className="relative">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input 
                type="email" 
                placeholder="ejemplo@empresa.com"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-6 focus:outline-none focus:border-neon-cyan transition-all text-white font-medium"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black uppercase text-gray-400 ml-4">Contraseña</label>
            <div className="relative">
              <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-6 focus:outline-none focus:border-neon-cyan transition-all text-white font-medium"
              />
            </div>
          </div>

          <button className="w-full py-6 bg-neon-cyan text-royal-blue-dark rounded-2xl font-black text-xl hover:shadow-[0_0_30px_rgba(0,243,255,0.4)] transition-all flex items-center justify-center gap-3">
            ACCEDER AHORA <ArrowRight className="w-6 h-6" />
          </button>
        </form>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm font-bold">
            ¿No tienes cuenta? <span className="text-neon-cyan cursor-pointer hover:underline">Solicita tu acceso aquí.</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
