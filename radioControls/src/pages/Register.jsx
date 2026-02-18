import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Radio, ArrowRight, User, Lock, Mail } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (password.length < 8) {
      setError('La contraseña debe tener al menos 8 caracteres.');
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Error al registrar la cuenta');
      }

      // On successful registration, redirect to login
      navigate('/login');

    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-light-background dark:bg-royal-blue-dark flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white dark:bg-black/40 backdrop-blur-2xl border border-black/10 dark:border-white/10 p-12 rounded-[48px] shadow-2xl"
      >
        <div className="flex flex-col items-center mb-12">
          <div className="p-4 bg-light-accent dark:bg-neon-cyan rounded-2xl mb-6">
            <Radio className="w-10 h-10 text-white dark:text-royal-blue-dark" />
          </div>
          <h1 className="text-3xl font-black text-light-text dark:text-white uppercase tracking-tighter">Crear Cuenta</h1>
          <p className="text-gray-500 dark:text-gray-500 font-bold text-sm mt-2">ÚNETE A LA PLATAFORMA</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="text-xs font-black uppercase text-gray-500 dark:text-gray-400 ml-4">Nombre Completo</label>
            <div className="relative">
              <User className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ej. Juan Pérez"
                className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl py-5 pl-14 pr-6 focus:outline-none focus:border-light-accent dark:focus:border-neon-cyan transition-all text-light-text dark:text-white font-medium"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-xs font-black uppercase text-gray-500 dark:text-gray-400 ml-4">Correo Electrónico</label>
            <div className="relative">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ejemplo@empresa.com"
                className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl py-5 pl-14 pr-6 focus:outline-none focus:border-light-accent dark:focus:border-neon-cyan transition-all text-light-text dark:text-white font-medium"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black uppercase text-gray-500 dark:text-gray-400 ml-4">Contraseña (mín. 8 caracteres)</label>
            <div className="relative">
              <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="••••••••"
                className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl py-5 pl-14 pr-6 focus:outline-none focus:border-light-accent dark:focus:border-neon-cyan transition-all text-light-text dark:text-white font-medium"
                required
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-sm font-bold text-center">{error}</p>}

          <button 
            type="submit"
            disabled={isLoading}
            className="w-full py-6 bg-light-accent dark:bg-neon-cyan text-white dark:text-royal-blue-dark rounded-2xl font-black text-xl hover:shadow-[0_0_30px_rgba(0,35,102,0.4)] dark:hover:shadow-[0_0_30px_rgba(0,243,255,0.4)] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
          >
            {isLoading ? 'CREANDO CUENTA...' : 'CREAR CUENTA'}
            {!isLoading && <ArrowRight className="w-6 h-6" />}
          </button>
        </form>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm font-bold">
            ¿Ya tienes una cuenta?{' '}
            <Link to="/login" className="text-light-accent dark:text-neon-cyan cursor-pointer hover:underline">
              Inicia sesión aquí.
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
