import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const Pricing = () => {
  return (
    <div className="pt-32 pb-20 px-4 min-h-screen bg-royal-blue-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black mb-6 italic tracking-tighter uppercase underline decoration-neon-cyan underline-offset-8">Planes Especializados</h1>
          <p className="text-gray-400 font-bold tracking-[0.3em] uppercase">Inversión garantizada con retorno medible</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Mensual */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-royal-blue border-2 border-white/5 p-16 rounded-[48px] hover:border-white/20 transition-all group"
          >
            <h3 className="text-3xl font-black mb-2 uppercase group-hover:text-neon-cyan transition-colors">Mensual</h3>
            <div className="flex items-baseline gap-2 mb-12">
              <span className="text-7xl font-black">$539</span>
              <span className="text-xl text-gray-500 font-bold uppercase tracking-widest">MXN</span>
            </div>
            <ul className="space-y-6 mb-16">
              {['Acceso vía Link Sucursal', 'Asesoría en Ingeniería', 'AMPROFON Incluido', 'Soporte 24/7'].map(item => (
                <li key={item} className="flex items-center gap-4 text-lg font-medium text-gray-300"><CheckCircle2 className="text-neon-cyan shrink-0" /> {item}</li>
              ))}
            </ul>
            <button className="w-full py-6 bg-white text-royal-blue-dark rounded-3xl font-black text-xl hover:bg-neon-cyan transition-all uppercase tracking-tighter shadow-xl">CONTRATAR</button>
          </motion.div>

          {/* Anual */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-royal-blue-dark border-4 border-neon-cyan p-16 rounded-[48px] relative shadow-[0_0_60px_rgba(0,243,255,0.15)]"
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-neon-cyan text-royal-blue-dark px-8 py-2 rounded-full font-black text-sm uppercase tracking-widest">
              ¡Mejor Valor!
            </div>
            <h3 className="text-3xl font-black mb-2 uppercase text-neon-cyan">Anual</h3>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-7xl font-black">$5,390</span>
              <span className="text-xl text-gray-500 font-bold uppercase tracking-widest">MXN</span>
            </div>
            <p className="text-neon-cyan font-black text-sm uppercase mb-12 animate-pulse text-center">¡Ahorra más del 15% y recibe 1 mes gratis!</p>
            <ul className="space-y-6 mb-16">
              {['Todo el plan Mensual', 'Prioridad Técnica', 'Instalación Preferente', 'Publicidad Personalizada'].map(item => (
                <li key={item} className="flex items-center gap-4 text-lg font-medium text-gray-200"><CheckCircle2 className="text-neon-cyan shrink-0" /> {item}</li>
              ))}
            </ul>
            <button className="w-full py-6 bg-neon-cyan text-royal-blue-dark rounded-3xl font-black text-xl shadow-[0_0_30px_rgba(0,243,255,0.4)] hover:scale-105 transition-all uppercase tracking-tighter">CONTRATAR ANUAL</button>
          </motion.div>
        </div>
        
        <div className="mt-20 text-center bg-white/5 p-10 rounded-3xl border border-white/10 max-w-3xl mx-auto">
          <h4 className="text-2xl font-black text-neon-cyan mb-4 uppercase">¿Tienes una Franquicia?</h4>
          <p className="text-gray-400 mb-0">Ofrecemos planes corporativos personalizados para cadenas con más de 10 sucursales. Contacta con nuestro equipo comercial para una cotización a medida.</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
