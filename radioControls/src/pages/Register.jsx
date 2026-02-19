import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, ArrowRight, User as UserIcon, Radio, ArrowLeft } from 'lucide-react';
import AuthSplitLayout from '../components/AuthSplitLayout';

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 8) {
      setError('La contraseña debe tener al menos 8 caracteres.');
      return;
    }
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'No se pudo crear la cuenta.');
      }
      console.log('Registration successful');
      navigate('/login');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthSplitLayout>
      <Link 
        to="/" 
        className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-1 px-3 py-2 rounded-full text-sm font-medium text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-lg transition-all duration-200"
      >
        <ArrowLeft className="h-4 w-4" /> Inicio
      </Link>
      <div className="bg-white dark:bg-slate-900/50 p-8 sm:p-12 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-2xl backdrop-blur-lg">
        <div className="flex flex-col items-center text-center mb-10">
          <Link to="/" className="mb-6">
            <Radio className="h-14 w-14 text-blue-600 dark:text-neon-cyan" />
          </Link>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Crea tu Cuenta
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            ¿Ya tienes una?{' '}
            <Link to="/login" className="font-semibold text-blue-600 dark:text-neon-cyan hover:underline">
              Inicia sesión
            </Link>
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Nombre Completo</label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <UserIcon className="h-5 w-5 text-slate-400" />
              </div>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Juan Pérez"
                className="w-full rounded-xl bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 py-3 pl-10 pr-4 text-slate-900 dark:text-white ring-1 ring-inset ring-transparent placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:focus:ring-neon-cyan"
                required
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Correo Electrónico</label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Mail className="h-5 w-5 text-slate-400" />
              </div>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="w-full rounded-xl bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 py-3 pl-10 pr-4 text-slate-900 dark:text-white ring-1 ring-inset ring-transparent placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:focus:ring-neon-cyan"
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Contraseña</label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Lock className="h-5 w-5 text-slate-400" />
              </div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mínimo 8 caracteres"
                className="w-full rounded-xl bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 py-3 pl-10 pr-4 text-slate-900 dark:text-white ring-1 ring-inset ring-transparent placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:focus:ring-neon-cyan"
                required
              />
            </div>
          </div>

          {error && <p className="text-sm font-bold text-red-500 text-center">{error}</p>}

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 dark:bg-neon-cyan px-4 py-3 text-sm font-bold text-white dark:text-slate-900 shadow-lg transition-all duration-300 hover:bg-slate-800 dark:hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Creando cuenta...' : 'Crear Cuenta'}
              {!isLoading && <ArrowRight className="h-5 w-5" />}
            </button>
          </div>
        </form>
      </div>
    </AuthSplitLayout>
  );
};

export default Register;
