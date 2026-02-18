import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-20 px-4 min-h-screen bg-royal-blue-dark">
      <div className="max-w-7xl mx-auto">
        <div className="bg-neon-cyan rounded-[60px] p-12 md:p-24 flex flex-col lg:flex-row gap-20 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-royal-blue-dark/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
          
          <div className="lg:w-1/2 text-royal-blue-dark relative z-10">
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none uppercase tracking-tighter">Hablemos de <br/> tu Negocio</h1>
            <p className="text-2xl font-bold mb-12 opacity-80 italic leading-relaxed">¿Listo para transformar tu espacio comercial? Déjanos tus datos y un especialista en ingeniería de audio te contactará en menos de 2 horas.</p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="bg-royal-blue-dark p-4 rounded-2xl text-neon-cyan shadow-lg"><Mail className="w-8 h-8" /></div>
                <span className="text-2xl font-black uppercase tracking-tighter">hola@radioleacontrols.com</span>
              </div>
              <div className="flex items-center gap-6">
                <div className="bg-royal-blue-dark p-4 rounded-2xl text-neon-cyan shadow-lg"><Phone className="w-8 h-8" /></div>
                <span className="text-2xl font-black uppercase tracking-tighter">+52 (55) 1234-5678</span>
              </div>
              <div className="flex items-center gap-6">
                <div className="bg-royal-blue-dark p-4 rounded-2xl text-neon-cyan shadow-lg"><MapPin className="w-8 h-8" /></div>
                <span className="text-2xl font-black uppercase tracking-tighter text-sm md:text-xl">Av. Homero 1425, Polanco, CDMX</span>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-1/2 bg-royal-blue-dark rounded-[48px] p-12 shadow-2xl relative z-10 border border-white/5"
          >
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-gray-500 ml-4">Nombre Completo</label>
                <input type="text" placeholder="Ej. Juan Pérez" className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-8 focus:outline-none focus:border-neon-cyan transition-all text-white text-lg" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-gray-500 ml-4">Correo Corporativo</label>
                <input type="email" placeholder="juan@empresa.com" className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-8 focus:outline-none focus:border-neon-cyan transition-all text-white text-lg" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-gray-500 ml-4">Mensaje o Requerimiento</label>
                <textarea placeholder="Cuéntanos sobre tu empresa (número de sucursales, giro...)" rows="4" className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-8 focus:outline-none focus:border-neon-cyan transition-all text-white text-lg resize-none"></textarea>
              </div>
              <button className="w-full py-6 bg-neon-cyan text-royal-blue-dark rounded-[24px] font-black text-2xl hover:shadow-[0_0_40px_rgba(0,243,255,0.5)] transition-all flex items-center justify-center gap-3 active:scale-[0.98]">
                ENVIAR SOLICITUD <Send className="w-6 h-6" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
